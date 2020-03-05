const FLAT_UI_COLOR = ["#ffeaa7", "#55efc4", "#81ecec", "#74b9ff",
					   "#00cec9", "#a29bfe", "#fd79a8", "#ff7675",
					   "#fdcb6e", "#fab1a0", "#B53471", "#4a69bd",
					   "#079992", "#60a3bc", "#ff7f50", "#ff6b6b"];

class BrickLoad extends React.Component {
	render() {
		return (
			<div className="brld-body">
				<div className="brld-wrp">
			        <div className="brld">
			            <div className="brld__brick brld__brick__1"></div>
			            <div className="brld__brick brld__brick__2"></div>
			            <div className="brld__brick brld__brick__3"></div>
			            <div className="brld__brick brld__brick__4"></div>
			            <div className="brld__brick brld__brick__5"></div>
			            <div className="brld__brick brld__brick__6"></div>
			        </div>
			    </div>
			</div>
		);
	}
}

class Heart extends React.Component {
	render() {
		const quote = this.props.quote;
		const author = this.props.author;
		const fillcolor = this.props.heartColor;
		return (
			<div className="heartWrp">
		        <div className="heart">
		            <svg className="svg-heart" height="267" width="343">
		                <path 
		                	  className="svg-heart__path"
		                      d="M61 1 L111 1 L171 36 L231 1 L281 1 L341 36 L341 136 L171 266 L1 136 L1 36 Z"
		                      stroke="#491604"
		                      strokeWidth="2"
		                      fill={fillcolor}
		                />
		            </svg>
		            <div className="quote">
		                <p className="quote-text">{quote}</p>
		                <p className="quote-author">{author}</p>
		            </div>
		        </div>
		    </div>
		);
	}
}

class TonTon extends React.Component {
	constructor(props) {
		super(props);
		this.onTonTonClick = this.onTonTonClick.bind(this);
		this.changeTonTon = this.changeTonTon.bind(this);
		this.bgURL = "media/tonton1.png";
		this.bgpx = 4; //background-position X
		this.bgpy = 4; //background-position y
	}
	onTonTonClick() {
		this.props.onTonTonClick();
		this.changeTonTon();
	}
	changeTonTon() {
		let tontonURL = ["media/tonton1.png", 
						 "media/tonton2.png", 
						 "media/tonton3.png"]//temporary, dont use for real host
		let randomTonTonURL = Math.floor(Math.random() * tontonURL.length);
		this.bgURL = tontonURL[randomTonTonURL];
		this.bgpx = 4 + Math.floor(Math.random() * 4) * 30; //base on sprite image
		this.bgpy = 4 + Math.floor(Math.random() * 6) * 18.5; //base on sprite image
	}
	render() {
		return (
			<button style={{backgroundImage: `url(${this.bgURL})`,
							backgroundPosition: `${this.bgpx}% ${this.bgpy}%`}}
					className="tonton" 
					onClick={this.onTonTonClick}></button>
		);
	}
}

class BackGroundImage extends React.Component {
	render() {
		const imageURL = this.props.imageURL;
		return (
			<div style={{backgroundImage: `url(${imageURL})`}}
				 className="bgim"></div>
		);
	}
}

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			quoteLoaded: false,
			bgLoaded: 0,
			data: [],
			bgdata: [],
			dataIndex: 0,
			colorset: FLAT_UI_COLOR,
			heartColor: "#ff6b6b"
		};
		this.onTonTonClick = this.onTonTonClick.bind(this);
	}
	componentDidMount() {
		fetch('https://type.fit/api/quotes')
			.then(res => res.json())
			.then(
				(result) => {
					this.setState({
						quoteLoaded: true,
						data: result
					});
				},
				(error) => {
					this.setState({
						quoteLoaded: true,
						error
					});
				}
			);

		let randomPage = Math.floor(Math.random() * 33) + 1;
		fetch(`https://picsum.photos/v2/list?page=${randomPage}&limit=30`)
			.then(res => res.json())
			.then(
				(result) => {
					//1 session need load 30 background image
					result.forEach(val => {
						

						fetch(val.download_url)
							.then(res => res.blob())
							.then(blob => {
								let arr = this.state.bgdata;
								arr.push(URL.createObjectURL(blob));
								this.setState((state) => ({
									bgdata: arr
								}));
							})
							.then(() => this.setState(state => ({
											bgLoaded: state.bgLoaded + 1
										}))
							)
							.catch((error) => {
									this.setState(state => ({
										bgLoaded: state.bgLoaded + 1
									}));
									console.log(error);
								}
							);


					});

				},
				(error) => {
					console.log(error);
				}
			);
	}
	onTonTonClick() {
		let data = this.state.data;

		let colorset = this.state.colorset;
		let colorset_len = colorset.length;

		this.setState({
			dataIndex: Math.floor(Math.random() * data.length),
			heartColor: colorset[Math.floor(Math.random() * colorset_len)]
		});
	}
	render() {
		const {error, quoteLoaded, data, bgLoaded, bgdata} = this.state;

		if (error) {
			return <div>{error.message}</div>;
		} else if (!quoteLoaded || (bgLoaded < 30)) {
			return <BrickLoad />;
		} else {
			let randomIndex = Math.floor(Math.random() * data.length);
			let randomBG = Math.floor(Math.random() * bgdata.length);

			return (
				<React.Fragment>
					
					<Heart quote={data[this.state.dataIndex].text} 
						   author={data[this.state.dataIndex].author}
						   heartColor={this.state.heartColor} />
					<TonTon onTonTonClick={this.onTonTonClick} />
					<BackGroundImage imageURL={this.state.bgdata[randomBG]} />

				</React.Fragment>
			);
		}
	}
}

ReactDOM.render(
	<App />,
	document.getElementById("app")
);
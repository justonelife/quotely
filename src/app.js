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
		return (
			<div className="heartWrp">
		        <div className="heart">
		            <svg className="svg-heart" height="267" width="343">
		                <path 
		                      d="M61 1 L111 1 L171 36 L231 1 L281 1 L341 36 L341 136 L171 266 L1 136 L1 36 Z"
		                      stroke="#491604"
		                      strokeWidth="2"
		                      fill="#FF6B6B"
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

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			data: [],
			dataIndex: 0
		};
		this.onTonTonClick = this.onTonTonClick.bind(this);
	}
	componentDidMount() {
		fetch('https://type.fit/api/quotes')
			.then(res => res.json())
			.then(
				(result) => {
					this.setState({
						isLoaded: true,
						data: result
					});
				},
				(error) => {
					this.setState({
						isLoaded: true,
						error
					});
				}
			);
	}
	onTonTonClick() {
		let data = this.state.data;
		this.setState({
			dataIndex: Math.floor(Math.random() * data.length)
		});
	}
	render() {
		const {error, isLoaded, data} = this.state;

		if (error) {
			return <div>{error.message}</div>;
		} else if (!isLoaded) {
			return <BrickLoad />;
		} else {
			let randomIndex = Math.floor(Math.random() * data.length);
			return (
				<React.Fragment>
					<Heart quote={data[this.state.dataIndex].text} 
						   author={data[this.state.dataIndex].author} />
					<TonTon onTonTonClick={this.onTonTonClick} />
				</React.Fragment>
			);
		}
	}
}

ReactDOM.render(
	<App />,
	document.getElementById("app")
);
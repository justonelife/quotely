const MY_QUOTES = "When something bad happens you have three choices. You can either let it define you, let is destroy you, or you can let it strengthen you."

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
		                <p className="quote-author">Dr. Seuss</p>
		            </div>
		        </div>
		    </div>
		);
	}
}

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			data: []
		};
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
	render() {
		const {error, isLoaded, data} = this.state;

		if (error) {
			return <div>{error.message}</div>;
		} else if (!isLoaded) {
			return <BrickLoad />;
		} else {
			return (
				<React.Fragment>
					<Heart quote={MY_QUOTES} />
				</React.Fragment>
			);
		}
	}
}

ReactDOM.render(
	<App />,
	document.getElementById("app")
);
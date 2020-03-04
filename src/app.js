class BrickLoad extends React.Component {
	render() {
		return (
			<div class="brld-body">
				<div class="brld-wrp">
			        <div class="brld">
			            <div class="brld__brick brld__brick__1"></div>
			            <div class="brld__brick brld__brick__2"></div>
			            <div class="brld__brick brld__brick__3"></div>
			            <div class="brld__brick brld__brick__4"></div>
			            <div class="brld__brick brld__brick__5"></div>
			            <div class="brld__brick brld__brick__6"></div>
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
						isLoaded: false,
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
					<h2>{data[Math.floor(Math.random() * 1644)].text}</h2>
				</React.Fragment>
			);
		}
	}
}

ReactDOM.render(
	<App />,
	document.getElementById("app")
);
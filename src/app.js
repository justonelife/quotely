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
			return <div>Loading...</div>;
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
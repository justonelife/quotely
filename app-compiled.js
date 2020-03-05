var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FLAT_UI_COLOR = ["#ffeaa7", "#55efc4", "#81ecec", "#74b9ff", "#00cec9", "#a29bfe", "#fd79a8", "#ff7675", "#fdcb6e", "#fab1a0", "#B53471", "#4a69bd", "#079992", "#60a3bc", "#ff7f50", "#ff6b6b"];

var BrickLoad = function (_React$Component) {
	_inherits(BrickLoad, _React$Component);

	function BrickLoad() {
		_classCallCheck(this, BrickLoad);

		return _possibleConstructorReturn(this, (BrickLoad.__proto__ || Object.getPrototypeOf(BrickLoad)).apply(this, arguments));
	}

	_createClass(BrickLoad, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				{ className: "brld-body" },
				React.createElement(
					"div",
					{ className: "brld-wrp" },
					React.createElement(
						"div",
						{ className: "brld" },
						React.createElement("div", { className: "brld__brick brld__brick__1" }),
						React.createElement("div", { className: "brld__brick brld__brick__2" }),
						React.createElement("div", { className: "brld__brick brld__brick__3" }),
						React.createElement("div", { className: "brld__brick brld__brick__4" }),
						React.createElement("div", { className: "brld__brick brld__brick__5" }),
						React.createElement("div", { className: "brld__brick brld__brick__6" })
					)
				)
			);
		}
	}]);

	return BrickLoad;
}(React.Component);

var Heart = function (_React$Component2) {
	_inherits(Heart, _React$Component2);

	function Heart() {
		_classCallCheck(this, Heart);

		return _possibleConstructorReturn(this, (Heart.__proto__ || Object.getPrototypeOf(Heart)).apply(this, arguments));
	}

	_createClass(Heart, [{
		key: "render",
		value: function render() {
			var quote = this.props.quote;
			var author = this.props.author;
			var fillcolor = this.props.heartColor;
			return React.createElement(
				"div",
				{ className: "heartWrp" },
				React.createElement(
					"div",
					{ className: "heart" },
					React.createElement(
						"svg",
						{ className: "svg-heart", height: "267", width: "343" },
						React.createElement("path", {
							className: "svg-heart__path",
							d: "M61 1 L111 1 L171 36 L231 1 L281 1 L341 36 L341 136 L171 266 L1 136 L1 36 Z",
							stroke: "#491604",
							strokeWidth: "2",
							fill: fillcolor
						})
					),
					React.createElement(
						"div",
						{ className: "quote" },
						React.createElement(
							"p",
							{ className: "quote-text" },
							quote
						),
						React.createElement(
							"p",
							{ className: "quote-author" },
							author
						)
					)
				)
			);
		}
	}]);

	return Heart;
}(React.Component);

var TonTon = function (_React$Component3) {
	_inherits(TonTon, _React$Component3);

	function TonTon(props) {
		_classCallCheck(this, TonTon);

		var _this3 = _possibleConstructorReturn(this, (TonTon.__proto__ || Object.getPrototypeOf(TonTon)).call(this, props));

		_this3.onTonTonClick = _this3.onTonTonClick.bind(_this3);
		_this3.changeTonTon = _this3.changeTonTon.bind(_this3);
		_this3.bgURL = "media/tonton1.png";
		_this3.bgpx = 4; //background-position X
		_this3.bgpy = 4; //background-position y
		return _this3;
	}

	_createClass(TonTon, [{
		key: "onTonTonClick",
		value: function onTonTonClick() {
			this.props.onTonTonClick();
			this.changeTonTon();
		}
	}, {
		key: "changeTonTon",
		value: function changeTonTon() {
			var tontonURL = ["media/tonton1.png", "media/tonton2.png", "media/tonton3.png"]; //temporary, dont use for real host
			var randomTonTonURL = Math.floor(Math.random() * tontonURL.length);
			this.bgURL = tontonURL[randomTonTonURL];
			this.bgpx = 4 + Math.floor(Math.random() * 4) * 30; //base on sprite image
			this.bgpy = 4 + Math.floor(Math.random() * 6) * 18.5; //base on sprite image
		}
	}, {
		key: "render",
		value: function render() {
			return React.createElement("button", { style: { backgroundImage: "url(" + this.bgURL + ")",
					backgroundPosition: this.bgpx + "% " + this.bgpy + "%" },
				className: "tonton",
				onClick: this.onTonTonClick });
		}
	}]);

	return TonTon;
}(React.Component);

var App = function (_React$Component4) {
	_inherits(App, _React$Component4);

	function App(props) {
		_classCallCheck(this, App);

		var _this4 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

		_this4.state = {
			error: null,
			quoteLoaded: false,
			bgLoaded: 0,
			data: [],
			bgdata: [],
			dataIndex: 0,
			colorset: FLAT_UI_COLOR,
			heartColor: "#ff6b6b"
		};
		_this4.onTonTonClick = _this4.onTonTonClick.bind(_this4);
		return _this4;
	}

	_createClass(App, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			var _this5 = this;

			fetch('https://type.fit/api/quotes').then(function (res) {
				return res.json();
			}).then(function (result) {
				_this5.setState({
					quoteLoaded: true,
					data: result
				});
			}, function (error) {
				_this5.setState({
					quoteLoaded: true,
					error: error
				});
			});

			var randomPage = Math.floor(Math.random() * 33) + 1;
			fetch("https://picsum.photos/v2/list?page=" + randomPage + "&limit=30").then(function (res) {
				return res.json();
			}).then(function (result) {
				//1 session need load 30 background image
				result.forEach(function (val) {

					fetch(val.download_url).then(function (res) {
						return res.blob();
					}).then(function (blob) {
						var arr = _this5.state.bgdata;
						arr.push(URL.createObjectURL(blob));
						_this5.setState(function (state) {
							return {
								bgdata: arr
							};
						});
					}).then(function () {
						return _this5.setState(function (state) {
							return {
								bgLoaded: state.bgLoaded + 1
							};
						});
					}).catch(function (error) {
						_this5.setState(function (state) {
							return {
								bgLoaded: state.bgLoaded + 1
							};
						});
						console.log(error);
					});
				});
			}, function (error) {
				console.log(error);
			});
		}
	}, {
		key: "onTonTonClick",
		value: function onTonTonClick() {
			var data = this.state.data;

			var colorset = this.state.colorset;
			var colorset_len = colorset.length;

			this.setState({
				dataIndex: Math.floor(Math.random() * data.length),
				heartColor: colorset[Math.floor(Math.random() * colorset_len)]
			});
		}
	}, {
		key: "render",
		value: function render() {
			var _state = this.state,
			    error = _state.error,
			    quoteLoaded = _state.quoteLoaded,
			    data = _state.data,
			    bgLoaded = _state.bgLoaded,
			    bgdata = _state.bgdata;


			if (error) {
				return React.createElement(
					"div",
					null,
					error.message
				);
			} else if (!quoteLoaded || bgLoaded < 30) {
				return React.createElement(BrickLoad, null);
			} else {
				var randomIndex = Math.floor(Math.random() * data.length);
				var randomBG = Math.floor(Math.random() * bgdata.length);

				return React.createElement(
					React.Fragment,
					null,
					React.createElement(
						"div",
						{ style: { backgroundImage: "url(" + bgdata[randomBG] + ")" },
							className: "bgim" },
						React.createElement(Heart, { quote: data[this.state.dataIndex].text,
							author: data[this.state.dataIndex].author,
							heartColor: this.state.heartColor }),
						React.createElement(TonTon, { onTonTonClick: this.onTonTonClick })
					)
				);
			}
		}
	}]);

	return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById("app"));

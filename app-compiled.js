var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MY_QUOTES = "When something bad happens you have three choices. You can either let it define you, let is destroy you, or you can let it strengthen you.";

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
							d: "M61 1 L111 1 L171 36 L231 1 L281 1 L341 36 L341 136 L171 266 L1 136 L1 36 Z",
							stroke: "#491604",
							strokeWidth: "2",
							fill: "#FF6B6B"
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
							"Dr. Seuss"
						)
					)
				)
			);
		}
	}]);

	return Heart;
}(React.Component);

var App = function (_React$Component3) {
	_inherits(App, _React$Component3);

	function App(props) {
		_classCallCheck(this, App);

		var _this3 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

		_this3.state = {
			error: null,
			isLoaded: false,
			data: []
		};
		return _this3;
	}

	_createClass(App, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			var _this4 = this;

			fetch('https://type.fit/api/quotes').then(function (res) {
				return res.json();
			}).then(function (result) {
				_this4.setState({
					isLoaded: true,
					data: result
				});
			}, function (error) {
				_this4.setState({
					isLoaded: true,
					error: error
				});
			});
		}
	}, {
		key: "render",
		value: function render() {
			var _state = this.state,
			    error = _state.error,
			    isLoaded = _state.isLoaded,
			    data = _state.data;


			if (error) {
				return React.createElement(
					"div",
					null,
					error.message
				);
			} else if (!isLoaded) {
				return React.createElement(BrickLoad, null);
			} else {
				return React.createElement(
					React.Fragment,
					null,
					React.createElement(Heart, { quote: MY_QUOTES })
				);
			}
		}
	}]);

	return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById("app"));

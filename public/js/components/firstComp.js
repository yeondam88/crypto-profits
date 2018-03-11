webpackJsonp([0],{

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _reactDatepicker = __webpack_require__(280);

var _reactDatepicker2 = _interopRequireDefault(_reactDatepicker);

var _moment = __webpack_require__(0);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    _classCallCheck(this, Home);

    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this));

    _this.state = {
      name: "Joe"
    };
    return _this;
  }

  _createClass(Home, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "section",
        { id: "home" },
        _react2.default.createElement(
          "div",
          { className: "container" },
          _react2.default.createElement(
            "div",
            { className: "col-md-6" },
            _react2.default.createElement("img", {
              src: "/img/bitcoin-logo.png",
              alt: "Bitcoin logo",
              className: "bitcoin-logo"
            })
          ),
          _react2.default.createElement(
            "div",
            { className: "col-md-6" },
            _react2.default.createElement(
              "h2",
              null,
              "Enter Transaction"
            ),
            _react2.default.createElement(
              "label",
              null,
              "Crypto Amount"
            ),
            _react2.default.createElement("input", {
              type: "text",
              name: "amount",
              onChange: this.props.onChangeInput,
              value: this.props.globalState.cryptoAmount
            }),
            _react2.default.createElement(
              "label",
              null,
              "Date"
            ),
            _react2.default.createElement(_reactDatepicker2.default, {
              selected: this.props.globalState.date,
              onChange: this.props.handleDateChange
            }),
            _react2.default.createElement(
              "button",
              {
                type: "submit",
                className: "home--button",
                onClick: this.props.checkProfits
              },
              "Check Profits"
            )
          )
        )
      );
    }
  }]);

  return Home;
}(_react.Component);

exports.default = Home;

/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Results = function (_Component) {
  _inherits(Results, _Component);

  function Results() {
    _classCallCheck(this, Results);

    var _this = _possibleConstructorReturn(this, (Results.__proto__ || Object.getPrototypeOf(Results)).call(this));

    _this.clickedBtn = function () {
      console.log("swag");
    };

    _this.state = {
      name: "Joe"
    };
    return _this;
  }

  _createClass(Results, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "section",
        { id: "results" },
        _react2.default.createElement(
          "div",
          { className: "container" },
          _react2.default.createElement(
            "div",
            { className: "col-md-12" },
            _react2.default.createElement("div", { className: "ads" })
          ),
          _react2.default.createElement(
            "div",
            { className: "col-md-12" },
            _react2.default.createElement(
              "h3",
              null,
              "Your $",
              this.props.totalStatus.NEW_COST_PRICE,
              " dollar investment is now",
              " "
            ),
            _react2.default.createElement(
              "h1",
              null,
              this.props.totalStatus.NEW_SELLING_PRICE
            ),
            this.props.status === "gain" ? _react2.default.createElement(
              "h4",
              null,
              "You made ",
              this.props.totalStatus.GAIN_PERCENT,
              "% profit"
            ) : _react2.default.createElement(
              "h4",
              null,
              "You made ",
              this.props.totalStatus.LOSS_PERCENT,
              "% loss"
            ),
            _react2.default.createElement(
              "a",
              { href: "#", className: "main-btn active" },
              "Create account to keep track of all your records"
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "col-md-12" },
            _react2.default.createElement("div", { className: "ads" })
          )
        )
      );
    }
  }]);

  return Results;
}(_react.Component);

exports.default = Results;

/***/ }),

/***/ 248:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(28);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _axios = __webpack_require__(227);

var _axios2 = _interopRequireDefault(_axios);

var _moment = __webpack_require__(0);

var _moment2 = _interopRequireDefault(_moment);

var _Home = __webpack_require__(228);

var _Home2 = _interopRequireDefault(_Home);

var _Results = __webpack_require__(229);

var _Results2 = _interopRequireDefault(_Results);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Layout = function (_Component) {
  _inherits(Layout, _Component);

  function Layout() {
    _classCallCheck(this, Layout);

    var _this = _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this));

    _this.state = {
      location: "home",
      date: (0, _moment2.default)(),
      data: null,
      todayPrice: null,
      cryptoAmount: 1,
      status: null,
      totalStatus: null
    };
    _this.routingSystem = _this.routingSystem.bind(_this);
    _this.handleDateChange = _this.handleDateChange.bind(_this);
    _this.checkProfits = _this.checkProfits.bind(_this);
    _this.onChangeInput = _this.onChangeInput.bind(_this);
    return _this;
  }

  _createClass(Layout, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      _axios2.default.get("https://min-api.cryptocompare.com/data/pricehistorical?fsym=BTC&tsyms=USD&ts=" + (0, _moment2.default)().unix()).then(function (response) {
        return _this2.setState({
          todayPrice: response.data.BTC
        });
      }).catch(function (error) {
        return console.log(error);
      });
    }
  }, {
    key: "routingSystem",
    value: function routingSystem() {
      switch (this.state.location) {
        case "home":
          return _react2.default.createElement(_Home2.default, {
            handleDateChange: this.handleDateChange,
            globalState: this.state,
            onChangeInput: this.onChangeInput,
            checkProfits: this.checkProfits
          });
          break;
        case "results":
          return _react2.default.createElement(_Results2.default, { totalStatus: this.state.totalStatus, status: this.status });
          break;
        default:
          return _react2.default.createElement(_Home2.default, null);
      }
    }
  }, {
    key: "handleDateChange",
    value: function handleDateChange(date) {
      var _this3 = this;

      this.setState({
        date: date
      }, function () {
        return console.log(_this3.state.date);
      });
    }
  }, {
    key: "onChangeInput",
    value: function onChangeInput(event) {
      this.setState({
        cryptoAmount: event.target.value
      });
    }
  }, {
    key: "checkProfits",
    value: function checkProfits() {
      var _this4 = this;

      _axios2.default.get("https://min-api.cryptocompare.com/data/pricehistorical?fsym=BTC&tsyms=USD&ts=" + this.state.date.unix()).then(function (response) {
        return _this4.setState({
          data: response.data
        }, function () {
          var COST_PRICE = _this4.state.data.BTC.USD; // Cost of Bitcoin price on purchased date
          var SELLING_PRICE = _this4.state.todayPrice.USD; // Selling price as of today
          var NEW_COST_PRICE = _this4.state.cryptoAmount * 100;
          NEW_COST_PRICE = NEW_COST_PRICE * COST_PRICE / 100; // Total cost of user's input bitcoin amount on purchased date
          console.log(NEW_COST_PRICE);
          var NEW_SELLING_PRICE = _this4.state.cryptoAmount * 100;
          NEW_SELLING_PRICE = NEW_SELLING_PRICE * SELLING_PRICE / 100;
          console.log(NEW_SELLING_PRICE);
          if (NEW_COST_PRICE < NEW_SELLING_PRICE) {
            var gain = NEW_SELLING_PRICE - NEW_COST_PRICE;
            var gainPercent = (gain / NEW_COST_PRICE * 100).toFixed(2);
            console.log(_this4.state.cryptoAmount + " bitcoin newSP: " + NEW_SELLING_PRICE + ", SP: " + SELLING_PRICE + ", newCP: " + NEW_COST_PRICE + ", CP: " + COST_PRICE);
            console.log("Profit: ", gainPercent);
            _this4.setState({
              location: "results",
              status: "gain",
              totalStatus: {
                NEW_COST_PRICE: NEW_COST_PRICE,
                COST_PRICE: COST_PRICE,
                NEW_SELLING_PRICE: NEW_SELLING_PRICE,
                SELLING_PRICE: SELLING_PRICE,
                GAIN_PERCENT: gainPercent
              }
            });
          } else {
            var loss = NEW_COST_PRICE - NEW_SELLING_PRICE;
            var lossPercent = (loss / NEW_COST_PRICE * 100).toFixed(2);
            console.log("Lost: ", lossPercent);
            _this4.setState({
              location: "results",
              status: "loss",
              totalStatus: {
                NEW_COST_PRICE: NEW_COST_PRICE,
                COST_PRICE: COST_PRICE,
                NEW_SELLING_PRICE: NEW_SELLING_PRICE,
                SELLING_PRICE: SELLING_PRICE,
                LOSS_PERCENT: lossPercent
              }
            });
          }
        });
      }).catch(function (error) {
        return console.log(error);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "home" },
        _react2.default.createElement(
          "div",
          { className: "container" },
          _react2.default.createElement(
            "header",
            null,
            _react2.default.createElement(
              "div",
              { className: "logo" },
              "Crypto Profits"
            ),
            _react2.default.createElement(
              "nav",
              { className: "menu" },
              _react2.default.createElement(
                "a",
                { href: "#", className: "main-btn" },
                "Register"
              )
            )
          ),
          this.routingSystem()
        )
      );
    }
  }]);

  return Layout;
}(_react.Component);

var app = document.getElementById("app");

_reactDom2.default.render(_react2.default.createElement(Layout, null), app);

/***/ })

},[248]);
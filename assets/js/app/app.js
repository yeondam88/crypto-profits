import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import moment from "moment";
import Home from "./Home";
import Results from "./Results";

class Layout extends Component {
  constructor() {
    super();
    this.state = {
      location: "home",
      date: moment(),
      data: null,
      todayPrice: null,
      cryptoAmount: 1,
      status: null,
      totalStatus: null
    };
    this.routingSystem = this.routingSystem.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.checkProfits = this.checkProfits.bind(this);
    this.onChangeInput = this.onChangeInput.bind(this);
  }

  componentDidMount() {
    axios
      .get(
        `https://min-api.cryptocompare.com/data/pricehistorical?fsym=BTC&tsyms=USD&ts=${moment().unix()}`
      )
      .then(response =>
        this.setState({
          todayPrice: response.data.BTC
        })
      )
      .catch(error => console.log(error));
  }

  routingSystem() {
    switch (this.state.location) {
      case "home":
        return (
          <Home
            handleDateChange={this.handleDateChange}
            globalState={this.state}
            onChangeInput={this.onChangeInput}
            checkProfits={this.checkProfits}
          />
        );
        break;
      case "results":
        return (
          <Results totalStatus={this.state.totalStatus} status={this.status} />
        );
        break;
      default:
        return <Home />;
    }
  }

  handleDateChange(date) {
    this.setState(
      {
        date: date
      },
      () => console.log(this.state.date)
    );
  }

  onChangeInput(event) {
    this.setState({
      cryptoAmount: event.target.value
    });
  }

  checkProfits() {
    axios
      .get(
        `https://min-api.cryptocompare.com/data/pricehistorical?fsym=BTC&tsyms=USD&ts=${this.state.date.unix()}`
      )
      .then(response =>
        this.setState(
          {
            data: response.data
          },
          () => {
            const COST_PRICE = this.state.data.BTC.USD; // Cost of Bitcoin price on purchased date
            const SELLING_PRICE = this.state.todayPrice.USD; // Selling price as of today
            let NEW_COST_PRICE = this.state.cryptoAmount * 100;
            NEW_COST_PRICE = NEW_COST_PRICE * COST_PRICE / 100; // Total cost of user's input bitcoin amount on purchased date
            console.log(NEW_COST_PRICE);
            let NEW_SELLING_PRICE = this.state.cryptoAmount * 100;
            NEW_SELLING_PRICE = NEW_SELLING_PRICE * SELLING_PRICE / 100;
            console.log(NEW_SELLING_PRICE);
            if (NEW_COST_PRICE < NEW_SELLING_PRICE) {
              let gain = NEW_SELLING_PRICE - NEW_COST_PRICE;
              let gainPercent = (gain / NEW_COST_PRICE * 100).toFixed(2);
              console.log(
                `${
                  this.state.cryptoAmount
                } bitcoin newSP: ${NEW_SELLING_PRICE}, SP: ${SELLING_PRICE}, newCP: ${NEW_COST_PRICE}, CP: ${COST_PRICE}`
              );
              console.log("Profit: ", gainPercent);
              this.setState({
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
              let loss = NEW_COST_PRICE - NEW_SELLING_PRICE;
              let lossPercent = (loss / NEW_COST_PRICE * 100).toFixed(2);
              console.log("Lost: ", lossPercent);
              this.setState({
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
          }
        )
      )
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="home">
        <div className="container">
          <header>
            <div className="logo">Crypto Profits</div>
            <nav className="menu">
              <a href="#" className="main-btn">
                Register
              </a>
            </nav>
          </header>
          {this.routingSystem()}
        </div>
      </div>
    );
  }
}

const app = document.getElementById("app");

ReactDOM.render(<Layout />, app);

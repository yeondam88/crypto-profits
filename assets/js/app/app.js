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
      data: null
    };
    this.routingSystem = this.routingSystem.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.apiCall = this.apiCall.bind(this);
  }

  componentDidMount() {
    this.apiCall();
  }

  routingSystem() {
    switch (this.state.location) {
      case "home":
        return (
          <Home
            handleDateChange={this.handleDateChange}
            globalState={this.state}
          />
        );
        break;
      case "Results":
        return <Results />;
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
      () => console.log(this.state.data.unix())
    );
  }

  apiCall() {
    axios
      .get(
        "https://min-api.cryptocompare.com/data/pricehistorical?fsym=BTC&tsyms=USD&ts=1452680400"
      )
      .then(response =>
        this.setState({
          data: response.data
        })
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

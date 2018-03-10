import React, { Component } from "react";
import ReactDOM from "react-dom";

import moment from "moment";
import Home from "./Home";
import Results from "./Results";

class Layout extends Component {
  constructor() {
    super();
    this.state = {
      location: "home",
      date: moment()
    };
    this.routingSystem = this.routingSystem.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
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
      () => console.log(this.state)
    );
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

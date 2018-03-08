import React, { Component } from "react";
import ReactDOM from "react-dom";

import Home from "./Home";
import Results from "./Results";

class Layout extends Component {
  constructor() {
    super();
    this.state = {
      location: "Home"
    };
    this.routingSystem = this.routingSystem.bind(this);
  }

  routingSystem() {
    switch (this.state.location) {
      case "Home":
        return "<Home />";
        break;
      case "Results":
        return "<Results />";
        break;
      default:
        return "<Home />";
    }
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
          {/*<Home /> */}
          <Results />
        </div>
      </div>
    );
  }
}

const app = document.getElementById("app");

ReactDOM.render(<Layout />, app);

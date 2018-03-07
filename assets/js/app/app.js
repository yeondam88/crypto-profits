import React, { Component } from "react";
import ReactDOM from "react-dom";

import Home from "./Home";
import Results from "./Results";

class Layout extends Component {
  constructor() {
    super();
    this.state = {
      name: "Joe"
    };
  }
  clickedBtn = () => {
    console.log("swag");
  };
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

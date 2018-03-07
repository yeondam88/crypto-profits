import React, { Component } from "react";

class Home extends Component {
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
      <section id="home">
        <div className="container">
          <div className="col-md-6">
            <img
              src="/img/bitcoin-logo.png"
              alt="Bitcoin logo"
              className="bitcoin-logo"
            />
          </div>
          <div className="col-md-6">
            <h2>Enter Transaction</h2>

            <label>Crypto Amount</label>
            <input type="text" name="amount" />
            <label>Date</label>
            <input type="text" name="date" />
            <button type="submit">Check Profits</button>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;

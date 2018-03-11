import React, { Component } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      name: "Joe"
    };
  }

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
            <input
              type="text"
              name="amount"
              onChange={this.props.onChangeInput}
              value={this.props.globalState.cryptoAmount}
            />
            <label>Date</label>
            <DatePicker
              selected={this.props.globalState.date}
              onChange={this.props.handleDateChange}
            />
            <button
              type="submit"
              className="home--button"
              onClick={this.props.checkProfits}
            >
              Check Profits
            </button>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;

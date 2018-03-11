import React, { Component } from "react";

class Results extends Component {
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
      <section id="results">
        <div className="container">
          <div className="col-md-12">
            <div className="ads" />
          </div>
          <div className="col-md-12">
            <h3>
              Your ${this.props.totalStatus.NEW_COST_PRICE} dollar investment is
              now{" "}
            </h3>
            <h1>{this.props.totalStatus.NEW_SELLING_PRICE}</h1>
            {this.props.status === "gain" ? (
              <h4>You made {this.props.totalStatus.GAIN_PERCENT}% profit</h4>
            ) : (
              <h4>You made {this.props.totalStatus.LOSS_PERCENT}% loss</h4>
            )}
            <a href="#" className="main-btn active">
              Create account to keep track of all your records
            </a>
          </div>
          <div className="col-md-12">
            <div className="ads" />
          </div>
        </div>
      </section>
    );
  }
}

export default Results;

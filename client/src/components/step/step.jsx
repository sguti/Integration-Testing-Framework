import React, { Component } from "react";
import "./step.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";

class Step extends Component {
  render() {
    return (
      <div className="step-wrapper">
        <div className="step-header">{this.props.step.name}</div>     
           div


        <div className="step-data" />
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {};
};

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Step);

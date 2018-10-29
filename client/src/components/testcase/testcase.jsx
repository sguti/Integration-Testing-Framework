import React, { Component } from "react";
import "./testcase.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { selectTestCase } from "../../store/actions/sidenav-action";
import { connect } from "react-redux";
import Step from "../step/step";

class TestCase extends Component {
  render() {
    return (
      <div className="test-case-wrapper">
        <div className="test-case-header">{this.props.testCase.name}</div>
        <div className="test-case-steps">
          {this.props.testCase.steps.map(step => {
            return (
              <div key={step.id}>
                <Step step={step} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onSelectTestCase: payload => {
      dispatch(selectTestCase(payload));
    }
  };
};

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestCase);

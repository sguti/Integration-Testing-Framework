import React, { Component } from "react";
import "./testcase-compact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { selectTestCase } from "../../store/actions/sidenav-action";
import { connect } from "react-redux";

class TestCaseCompact extends Component {
  render() {
    return (
      <div className="test-case-compact-wrapper">
        <div className="test-case-compact-header">
          <span
            className="test-case-name"
            onClick={() =>
              this.props.onSelectTestCase({
                folderId: this.props.folderId,
                testCaseId: this.props.testCase.id
              })
            }
          >
            {this.props.testCase.name}
          </span>
        </div>
        <div className="test-case-compact-steps">
          {!this.props.testCase.steps.length && (
            <span> No Step Added Yet </span>
          )}
        </div>
        <div className="test-case-compact-historical" />
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
)(TestCaseCompact);

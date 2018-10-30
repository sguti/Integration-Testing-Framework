import React, { Component } from "react";
import "./testcase.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  selectTestCase,
  editTestCaseName,
  saveTestCaseName
} from "../../store/actions/sidenav-action";
import { connect } from "react-redux";
import Step from "../step/step";

class TestCase extends Component {
  render() {
    return (
      <div className="test-case-wrapper">
        <div className="test-case-header">
          {!this.props.testCase.nameEditable && this.props.testCase.name}
          {this.props.testCase.nameEditable && (
            <input
              type="text"
              autoFocus="true"
              value={this.props.testCase.name}
              onClick={event => {
                event.preventDefault();
              }}
              onBlur={event => {
                event.preventDefault();
                this.props.onSaveTestCaseName({
                  folderId: this.props.folderId,
                  testCaseId: this.props.testCase.id,
                  blur: true,
                  testCaseName: event.target.value
                });
              }}
              onChange={event => {
                event.preventDefault();
                this.props.onSaveTestCaseName({
                  folderId: this.props.folderId,
                  testCaseId: this.props.testCase.id,
                  testCaseName: event.target.value
                });
              }}
            />
          )}
          {!this.props.testCase.nameEditable && (
            <FontAwesomeIcon
              icon="pen"
              onClick={() =>
                this.props.onEditTestCaseName({
                  folderId: this.props.folderId,
                  testCaseId: this.props.testCase.id
                })
              }
            />
          )}
        </div>
        <div className="test-case-steps">
          {this.props.testCase.steps.map(step => {
            return (
              <div key={step.id}>
                <Step                  
                  step={step}
                  folderId={this.props.folderId}
                  testCaseId={this.props.testCase.id}
                  lastExecutionData={
                    this.props.testCase.history[0] &&
                    this.props.testCase.history[0].find(
                      data => data.stepId == step.id
                    )
                  }
                />
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
    },
    onEditTestCaseName: payload => {
      dispatch(editTestCaseName(payload));
    },
    onSaveTestCaseName: payload => {
      dispatch(saveTestCaseName(payload));
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

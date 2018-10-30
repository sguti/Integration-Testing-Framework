import React, { Component } from "react";
import "./step.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import { updateTestCaseStep } from "../../store/actions/sidenav-action";

class Step extends Component {
  render() {
    return (
      <div className="step-wrapper">
        <div className="step-header">
          {!this.props.step.nameEditable && this.props.step.name}
          {this.props.step.nameEditable && (
            <input
              type="text"
              autoFocus="true"
              value={this.props.step.name}
              onClick={event => {
                event.preventDefault();
              }}
              onBlur={event => {
                event.preventDefault();
                this.props.onUpdateTestCaseStep({
                  folderId: this.props.folderId,
                  testCaseId: this.props.testCaseId,
                  stepId: this.props.step.id,
                  delta: {
                    name: event.target.value,
                    nameEditable: false
                  }
                });
              }}
              onChange={event => {
                event.preventDefault();
                this.props.onUpdateTestCaseStep({
                  folderId: this.props.folderId,
                  testCaseId: this.props.testCaseId,
                  stepId: this.props.step.id,
                  delta: {
                    name: event.target.value
                  }
                });
              }}
            />
          )}
          {!this.props.step.nameEditable && (
            <FontAwesomeIcon
              icon="pen"
              onClick={event => {
                this.props.onUpdateTestCaseStep({
                  folderId: this.props.folderId,
                  testCaseId: this.props.testCaseId,
                  stepId: this.props.step.id,
                  delta: {
                    nameEditable: true
                  }
                });
              }}
            />
          )}
        </div>
        <div className="step-container">
          <div className="step-data-wrapper">
            <div className="step-type">
              <div className="step-type-options  blue semi-square">
                <select
                  name="step-type-options"
                  onChange={event =>
                    this.props.onUpdateTestCaseStep({
                      folderId: this.props.folderId,
                      testCaseId: this.props.testCaseId,
                      stepId: this.props.step.id,
                      delta: {
                        featureId: event.target.value
                      }
                    })
                  }
                  value={this.props.step.featureId}
                >
                  {this.props.features.map(feature => {
                    return <option value={feature.id}>{feature.name}</option>;
                  })}
                </select>
              </div>
            </div>
            <div className="step-data">
              {this.props.features.find(
                feature => feature.id == this.props.step.featureId
              ).inputRequired &&
                !this.props.features.find(
                  feature => feature.id == this.props.step.featureId
                ).multiline && (
                  <input
                    type="text"
                    value={this.props.step.data}
                    onChange={event =>
                      this.props.onUpdateTestCaseStep({
                        folderId: this.props.folderId,
                        testCaseId: this.props.testCaseId,
                        stepId: this.props.step.id,
                        delta: {
                          data: event.target.value
                        }
                      })
                    }
                  />
                )}
              {this.props.features.find(
                feature => feature.id == this.props.step.featureId
              ).inputRequired &&
                this.props.features.find(
                  feature => feature.id == this.props.step.featureId
                ).multiline && (
                  <textarea
                    cols="50"
                    rows="20"
                    value={this.props.step.data}
                    onChange={event =>
                      this.props.onUpdateTestCaseStep({
                        folderId: this.props.folderId,
                        testCaseId: this.props.testCaseId,
                        stepId: this.props.step.id,
                        delta: {
                          data: event.target.value
                        }
                      })
                    }
                  />
                )}
            </div>
          </div>
          <div className="step-reponse-wrapper">
            {this.props.lastExecutionData && (
              <div className="response-row-wrapper">
                <div className="response-row">
                  <span className="label">Status</span>
                  <span
                    className={
                      this.props.lastExecutionData.pass
                        ? "data Pass"
                        : "data Fail"
                    }
                  >
                    {this.props.lastExecutionData.pass ? "Pass" : "Fail"}
                  </span>
                </div>
                <div className="response-row">
                  <span className="label">Start Time</span>
                  <span className="data">
                    {new Date(
                      this.props.lastExecutionData.startTime
                    ).toISOString()}
                  </span>
                </div>
                <div className="response-row">
                  <span className="label">End Time</span>
                  <span className="data">
                    {new Date(
                      this.props.lastExecutionData.endTime
                    ).toISOString()}
                  </span>
                </div>
                {this.props.lastExecutionData.image && (
                  <div className="response-row-image">
                    <span className="label">ScreenShot</span>
                    <div className="image-wrapper">
                      <img
                        src={this.props.lastExecutionData.image}
                        alt=""
                        srcset=""
                      />
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onUpdateTestCaseStep: payload => dispatch(updateTestCaseStep(payload))
  };
};

const mapStateToProps = state => {
  return {
    features: state.features.features
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Step);

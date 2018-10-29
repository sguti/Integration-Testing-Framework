import React, { Component } from "react";
import "./topbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import {
  removeSidenavFolder,
  addTestCase,
  removeTestCase,
  runTestCase,
  addTestCaseStep
} from "../../store/actions/sidenav-action";

class Topbar extends Component {
  render() {
    return (
      <div className="top-bar-wrapper">
        <div className="menu" />
        <div className="current-selection">
          {this.props.currentContext.type === "folder" && (
            <FontAwesomeIcon icon="folder" />
          )}
          {this.props.currentContext.type === "testcase" && (
            <FontAwesomeIcon icon="vial" />
          )}
          <span>{this.props.currentContext.name}</span>
        </div>
        <div className="tools">
          {this.props.currentContext.type === "folder" && (
            <div className="tools-options-container">
              <div
                onClick={() =>
                  this.props.onAddTestCase({
                    folderId: this.props.currentContext.folder.id
                  })
                }
              >
                <FontAwesomeIcon icon="plus" />
              </div>
              <div
                onClick={() =>
                  this.props.onRemoveFolderClick({
                    folderId: this.props.currentContext.folder.id
                  })
                }
              >
                <FontAwesomeIcon icon="trash" />
              </div>
              <div>
                <FontAwesomeIcon icon="play" />
              </div>
            </div>
          )}
          {this.props.currentContext.type === "testcase" && (
            <div className="tools-options-container">
              <div
                onClick={() =>
                  this.props.onAddTestCaseStep({
                    folderId: this.props.currentContext.folder.id,
                    testCaseId: this.props.currentContext.testCase.id
                  })
                }
              >
                <FontAwesomeIcon icon="plus" />
              </div>
              <div
                onClick={() =>
                  this.props.onRunTestCase({
                    folderId: this.props.currentContext.folder.id,
                    testCaseId: this.props.currentContext.testCase.id
                  })
                }
              >
                <FontAwesomeIcon icon="play" />
              </div>
            </div>
          )}
        </div>
        <div className="user-info">
          <FontAwesomeIcon icon="user" />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onRemoveFolderClick: payload => {
      dispatch(removeSidenavFolder(payload));
    },
    onAddTestCase: payload => {
      dispatch(addTestCase(payload));
    },
    onAddTestCaseStep: payload => {
      dispatch(addTestCaseStep(payload));
    },
    onRunTestCase: payload => {
      dispatch(runTestCase(payload));
    }
  };
};

const mapStateToProps = state => {
  return {
    currentContext: state.sidenav.currentContext
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Topbar);

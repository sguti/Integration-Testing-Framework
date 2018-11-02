import React, { Component } from "react";
import "./sidenav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  addFolder,
  removeFolder,
  editFolderName,
  saveFolderName,
  toggleFolderView
} from "../../store/actions/folder-action";
import {
  addTestCase,
  removeTestCase
} from "../../store/actions/testcase-action";

import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

class Sidenav extends Component {
  constructor(props) {
    super(props);
    this.state = { isExpanded: false };
  }
  toggle = () => {
    this.setState((previousState, props) => {
      return { isExpanded: !previousState.isExpanded };
    });
  };
  render() {
    return (
      <div className="sidenav-wrapper">
        {this.state.isExpanded && (
          <FontAwesomeIcon icon="times" onClick={this.toggle} />
        )}
        {!this.state.isExpanded && (
          <FontAwesomeIcon icon="bars" onClick={this.toggle} />
        )}
        {this.state.isExpanded && (
          <div className="sidenav-content">
            <div className="sidenav-primary-toolbar">
              <FontAwesomeIcon
                onClick={this.props.onAddFolderClick}
                icon="folder-plus"
              />
              <FontAwesomeIcon icon="th-list" />
            </div>
            <div className="sidenav-folders">
              {this.props.folders.map(folder => {
                return (
                  <div className="sidenav-folder-wrapper" key={folder.id}>
                    <div className="folder-header">
                      <div
                        onClick={() =>
                          this.props.onFolderIconClick({ folderId: folder.id })
                        }
                      >
                        {folder.open && <FontAwesomeIcon icon="folder-open" />}
                        {!folder.open && <FontAwesomeIcon icon="folder" />}
                      </div>
                      <span className="folder-name">
                        {" "}
                        {!folder.editable && (
                          <NavLink to={"/folder/" + folder.id}>
                            {folder.name}
                          </NavLink>
                        )}
                        {folder.editable && (
                          <input
                            type="text"
                            autoFocus="true"
                            value={folder.name}
                            onClick={event => {
                              event.preventDefault();
                            }}
                            onBlur={event => {
                              event.preventDefault();
                              this.props.onSaveFolderName({
                                folderId: folder.id,
                                blur: true,
                                folderName: event.target.value
                              });
                            }}
                            onChange={event => {
                              event.preventDefault();
                              this.props.onSaveFolderName({
                                folderId: folder.id,
                                folderName: event.target.value
                              });
                            }}
                          />
                        )}
                        {!folder.editable && (
                          <FontAwesomeIcon
                            icon="pen"
                            onClick={() =>
                              this.props.onEditFolderName({
                                folderId: folder.id
                              })
                            }
                          />
                        )}
                      </span>
                      <div className="folder-options-wrapper">
                        <FontAwesomeIcon icon="ellipsis-h" />
                        <div className="folder-options">
                          <div
                            onClick={() =>
                              this.props.onAddTestCase({ folderId: folder.id })
                            }
                          >
                            <FontAwesomeIcon icon="plus" />
                          </div>
                          <div
                            onClick={() =>
                              this.props.onRemoveFolderClick({
                                folderId: folder.id
                              })
                            }
                          >
                            <FontAwesomeIcon icon="trash" />
                          </div>
                          <div>
                            <FontAwesomeIcon icon="play" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="folder-content">
                      {(
                        this.props.testCasesByFolder.find(
                          item => item.folderId === folder.id
                        ) || { testCases: [] }
                      ).testCases.map(testCase => {
                        return (
                          <div className="test-case">
                            <FontAwesomeIcon icon="vial" />
                            {testCase.isRunning && <div className="loading" />}
                            <span
                              className={
                                testCase.isRunning
                                  ? "test-case-name running"
                                  : "test-case-name"
                              }
                            >
                              <NavLink
                                to={`/folder/${folder.id}/testcase/${
                                  testCase.id
                                }`}
                              >
                                {testCase.name}
                              </NavLink>
                            </span>
                            <div className="test-case-options-wrapper">
                              <FontAwesomeIcon icon="ellipsis-h" />
                              <div className="test-case-options">
                                <div
                                  onClick={() =>
                                    this.props.onRemoveTestCase({
                                      folderId: folder.id,
                                      testCaseId: testCase.id
                                    })
                                  }
                                >
                                  <FontAwesomeIcon icon="trash" />
                                </div>
                                <div>
                                  <FontAwesomeIcon icon="play" />
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onAddFolderClick: () => {
      dispatch(addFolder());
    },
    onRemoveFolderClick: payload => {
      dispatch(removeFolder(payload));
    },
    onEditFolderName: payload => {
      dispatch(editFolderName(payload));
    },
    onSaveFolderName: payload => {
      dispatch(saveFolderName(payload));
    },
    onAddTestCase: payload => {
      dispatch(addTestCase(payload));
    },
    onFolderIconClick: payload => {
      dispatch(toggleFolderView(payload));
    },
    onRemoveTestCase: payload => {
      dispatch(removeTestCase(payload));
    }
  };
};

const mapStateToProps = state => {
  return {
    folders: state.folders.folders,
    testCasesByFolder: state.testCases.testCasesByFolder
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidenav);

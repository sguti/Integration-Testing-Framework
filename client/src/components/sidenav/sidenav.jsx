import React, { Component } from "react";
import "./sidenav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  addNewSidenavFolder,
  removeSidenavFolder,
  addTestCase,
  folderIconClick,
  removeTestCase,
  selectFolder,
  selectTestCase,
  editFolderName,
  saveFolderName
} from "../../store/actions/sidenav-action";
import { connect } from "react-redux";

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
                      <span
                        className="folder-name"
                        onClick={event => {
                          event.preventDefault();
                          this.props.onSelectFolder({ folderId: folder.id });
                        }}
                      >
                        {" "}
                        {!folder.editable && folder.name}
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
                      {folder.open &&
                        folder.testCases.map(testCase => {
                          return (
                            <div className="test-case">
                              <FontAwesomeIcon icon="vial" />
                              {testCase.isRunning && <div class="loading" />}
                              <span
                                className={
                                  testCase.isRunning
                                    ? "test-case-name running"
                                    : "test-case-name"
                                }
                                onClick={() =>
                                  this.props.onSelectTestCase({
                                    folderId: folder.id,
                                    testCaseId: testCase.id
                                  })
                                }
                              >
                                {testCase.name}
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
      dispatch(addNewSidenavFolder());
    },
    onRemoveFolderClick: payload => {
      dispatch(removeSidenavFolder(payload));
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
      dispatch(folderIconClick(payload));
    },
    onRemoveTestCase: payload => {
      dispatch(removeTestCase(payload));
    },
    onSelectFolder: payload => {
      dispatch(selectFolder(payload));
    },
    onSelectTestCase: payload => {
      dispatch(selectTestCase(payload));
    }
  };
};

const mapStateToProps = state => {
  return {
    folders: state.sidenav.folders
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidenav);

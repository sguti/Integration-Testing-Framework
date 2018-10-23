import React, { Component } from "react";
import "./content.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "../../store/actions/sidenav-action";
import { connect } from "react-redux";
import TestCaseCompact from "../testcase-compact/testcase-compact";
import TestCase from "../testcase/testcase";

class Content extends Component {
  render() {
    return (
      <div className="App-content">
        {this.props.currentContext.type === "folder" &&
          this.props.currentContext.folder.testCases.map(testCase => {
            return (
              <TestCaseCompact
                folderId={this.props.currentContext.folder.id}
                testCase={testCase}
                key={testCase.id}
              />
            );
          })}
        {this.props.currentContext.type === "testcase" && (
          <TestCase
            folderId={this.props.currentContext.folder.id}
            testCase={this.props.currentContext.testCase}
          />
        )}
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {};
};

const mapStateToProps = state => {
  return {
    currentContext: state.sidenav.currentContext
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Content);

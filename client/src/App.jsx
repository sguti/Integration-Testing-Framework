import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Sidenav from "./components/sidenav/sidenav";
import Topbar from "./components/topbar/topbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Topbar />
        <Sidenav />
        <div className="App-content">          
        </div>
      </div>
    );
  }
}

export default App;

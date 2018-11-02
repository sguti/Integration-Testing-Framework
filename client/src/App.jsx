import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Sidenav from "./components/sidenav/sidenav";
import Topbar from "./components/topbar/topbar";
import Content from "./components/content/content";
import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Topbar />
        <Sidenav />
        <Content />
      </div>
    );
  }
}

export default App;

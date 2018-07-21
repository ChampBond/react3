import React, { Component } from "react";
import logo from "./logo.svg";
import NewsList from "./modules/news/NewsList";
import Button from "./modules/Button";
import P from "./modules/P";
import Sourcelist from "./modules/Sources/Sourceslist";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NewsList />
      </div>
    );
  }
}

export default App;

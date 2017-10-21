import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Cover from "./components/Cover/Cover.jsx";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/" component={Cover} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

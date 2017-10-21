import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import chattenLogo from "../../images/chatten-logo.png";
import Login from "../Login/Login.jsx";
import SignUp from "../SignUp/SignUp.jsx";

export default class Cover extends React.Component {
  componentWillMount() {
    //injecting scripts for components
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }
  
  render() {
    return (
      <Router>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-4">
              <div className="row justify-content-center">
                <img className="cover-page-logo" alt="Chatten logo" src={ chattenLogo } />
              </div>
              <h2>Welcome to Chatten</h2>
            </div>
          </div>
          <div>
            <Route exact path="/" component={ Login }></Route>
            <Route path="/login" component={ Login }></Route>
            <Route path="/signup" component={ SignUp }></Route>
          </div>
        </div>
      </Router>
    );
  }
}

import React from "react";
import { Link } from "react-router-dom";
import helpers  from "./login.helpers.js";

export default class Login extends React.Component {
  componentWillMount() {
    Object.assign(window, helpers); //attaching functions to the window object
  }

  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-6">
          <form>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input type="password" className="form-control" id="password" placeholder="Password" />
            </div>
            <div className="form-check">
              <label className="form-check-label">
                <input type="checkbox" className="form-check-input" />
                   Remember me
              </label>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-info">Submit</button>
            </div>
          </form>
          <div className="row justify-content-center">
            <div className="col-4">
              <div className="g-signin2" data-onsuccess="onGoogleSignIn"></div>
            </div>
            <div className="col-4">
              <div className="g-signin2" data-onsuccess="onSignIn"></div>
            </div>
          </div>
          <hr/>
          <div className="row justify-content-center">
            <div className="col-4">
              Not a member?
              <Link to="/signup" className="btn btn-info">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
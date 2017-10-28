import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class SignUp extends React.Component {

  signUp(event) {
    event.preventDefault();
    let formData = {
      firstName: document.getElementById("first-name").value,
      lastName: document.getElementById("last-name").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value
    };
    axios.post(
        `${ process.env.REACT_APP_API_URL }/persons`,
        formData
      )
      .then(response => {
        window.location.href = "/login";
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-6">
          <form action="" onSubmit={ e => this.signUp(e) } noValidate>
            <div className="row">
              <div className="col-6">
                <div className="form-group">
                  <label htmlFor="first-name">First name</label>
                  <input type="text" className="form-control" id="first-name" placeholder="First name" />
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label htmlFor="last-name">Last name</label>
                  <input type="text" className="form-control" id="last-name" placeholder="Last name" />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" id="password" placeholder="Password" />
            </div>
            <div className="form-check">
              <label className="form-check-label">
                <input type="checkbox" className="form-check-input" />
                <span>  Remember me</span>
              </label>
            </div>
            <button type="submit" className="btn btn-light">Submit</button>
          </form>
          <div className="row justify-content-center">
            <div className="col-4">
              Already a member?
              <Link to="/login" className="btn btn-info">
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

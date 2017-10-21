import React from "react";
import { Link } from "react-router-dom";

export default class SignUp extends React.Component {
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

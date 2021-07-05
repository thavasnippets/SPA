import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <div className="guest-form-card card">
            <div className="card-header text-center">
              <h2>Login Here</h2>
            </div>

            <div className="card-body">
              <form>
                <div className="form-group">
                  <label for="username">Username</label>
                  <input id="username" className="form-control" />
                  <span className="invalid-feedback">
                    Username can't be blank.
                  </span>
                </div>

                <div className="form-group">
                  <label for="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="form-control"
                  />
                  <span className="invalid-feedback">
                    Password can't be blank.
                  </span>
                </div>

                <div className="form-group">
                  <input type="checkbox" id="remember" name="remember" />
                  <label className="ml-1" for="remember">
                    Remember Me
                  </label>
                </div>

                <button className="btn btn-primary btn-block">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;

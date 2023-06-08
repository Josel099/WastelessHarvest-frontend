import React from "react";
import { Link } from "react-router-dom";
import "./signin.css";

function SignIn() {
  return (
    <div>
      <form>
        <div className="header">
        <h1>Sign In</h1>
        </div>
      <div className="inputbox">
        <div className="email">
          <input
            className="emailbox"
            type="email"
            id="uname"
            placeholder="email"
          />
        </div>
        
        <div className="password">
          <input
            className="pswbox"
            type="password"
            id="pname"
            placeholder="password"
          />
        </div>
      </div>
       

        <button type="submit" className="getin">
          Login
        </button>
        <div className="check">
          <br />
          <label>
            <input id="check" type="checkbox" />
            <span>Remember me</span>
          </label>
        </div>

        <br />
        <div className="last">
          Don't have an account{" "}
          <Link className="switch" to="/signup">
            Create
          </Link>
        </div>
        <br />
      </form>
    </div>
  );
}

export default SignIn;

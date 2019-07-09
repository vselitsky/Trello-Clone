import React from "react";
import { Link } from "react-router-dom";

class GreetingNavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="fixed-top">
        <div className="float-right">
          <Link to={`/login`} className="login">
            Log in
          </Link>
          <Link to={`/signup`} className="signup">
            Sign Up
          </Link>
        </div>
        <div className="float-left">
          <Link to={`/`} className="logo">
            <i className="fab fa-trello" />
          </Link>
          <Link to={`/`} className="brand">
            Yello
          </Link>
        </div>
      </div>
    );
  }
}

export default GreetingNavBar;

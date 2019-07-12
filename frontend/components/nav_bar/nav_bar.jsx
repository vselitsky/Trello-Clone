import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="header" className="nav-bar">
        <div className="nav-buttons-left">
          <Link to={`/boards`} className="nav-icon">
            <span className="icon-props">
              <i class="fas fa-home" />
            </span>
          </Link>
        </div>
        <div className="nav-buttons-right">
          <button className="nav-icon" onClick={this.props.logout}>
            Logout
          </button>
          <button className="nav-icon" onClick={this.props.logout}>
            <span className="icon-props">+</span>
          </button>
          <Link to={`/boards`} className="nav-icon">
            <span className="icon-props">
              <i class="fas fa-sign-out-alt" />
            </span>
          </Link>
        </div>
        <div className="center-nav">
          <Link className="center-logo" to={`/`}>
            <i class="fab fa-trello" />
            Yello
          </Link>
        </div>
      </div>
    );
  }
}

export default NavBar;

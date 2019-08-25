import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { HomeAlt } from "styled-icons/boxicons-regular/HomeAlt";
import { LogOut } from "styled-icons/boxicons-regular/LogOut";
const NavContainer = styled.div`
    box-sizing: border-box;
    display: flex;
    min-height: 40px;
    justify-content: space-between
    overflow: hidden;
    padding: 4px;
    z-index: 10;
    height: 32px;
    position: relative;
    background: #026aa7;
}
`;

const LogOutIcon = styled(LogOut)`
  border-radius: 3px;
  border: 0;
  cursor: pointer;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Noto Sans,
    Ubuntu, Droid Sans, Helvetica Neue, sans-serif;
  text-decoration: none;
  align-items: center;
  background-color: hsla(0, 0%, 100%, 0.3);
  box-shadow: none;
  color: #fff;
  display: flex;
  font-weight: 700;
  height: 32px;
  line-height: 32px;
  margin: 0 4px 0 0;
  padding: 0;
  transition: 0.1s ease;
  white-space: nowrap;
`;

const HomeIcon = styled(HomeAlt)`
  border-radius: 3px;
  border: 0;
  cursor: pointer;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Noto Sans,
    Ubuntu, Droid Sans, Helvetica Neue, sans-serif;
  text-decoration: none;
  align-items: center;
  background-color: hsla(0, 0%, 100%, 0.3);
  box-shadow: none;
  color: #fff;
  display: flex;
  font-weight: 700;
  height: 32px;
  line-height: 32px;
  margin: 0 4px 0 0;
  padding: 0;
  transition: 0.1s ease;
  white-space: nowrap;
`;

const MenuLink = styled.a``;

const NavLeft = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-grow: 1;
`;

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <NavContainer>
        <NavLeft>
          <MenuLink href="#/boards">
            <HomeIcon />
          </MenuLink>

          <MenuLink onClick={this.props.logout}>
            <LogOutIcon />
          </MenuLink>
        </NavLeft>
      </NavContainer>
    );
  }
}

export default NavBar;

{
  /* <div id="header" className="nav-bar">
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
} */
}

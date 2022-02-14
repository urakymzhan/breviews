import React from "react";
import { Link } from "react-router-dom";
import brlogo from "../../../public/assets/Logo.svg";
import { withRouter } from "react-router";
import PropTypes from "prop-types";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./style/header.scss";
import { useHistory } from "react-router-dom";
import AuthService from "../../services/auth.services";

const Header = ({ location, isAuthenticated, setIsAuthenticated }) => {
  let history = useHistory();
  const flexibleBgColor =
    location.pathname === "/" ||
    location.pathname.includes("results") ||
    location.pathname.includes("bootcamps")
      ? "linear-gradient(180deg, #E7F3E7 61.98%, #E7F3E7 78.88%)"
      : "#fff";

  const logOut = () => {
    AuthService.logout();
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    history.push("/");
  };

  return (
    <Navbar
      collapseOnSelect
      expand="sm"
      style={{ background: flexibleBgColor }}
    >
      <Navbar.Brand as={Link} to="/">
        <img className="brlogo" src={brlogo} />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link
            as={Link}
            to={{
              pathname: "/results",
              search: "?category=all",
            }}
            id="leave-review"
          >
            Show All Bootcamps
          </Nav.Link>
        </Nav>
        <Nav>
          {/* render based on is user isAuthenticated or not*/}
          {!localStorage.getItem("token") && (
            <Nav.Link as={Link} to="/login" id="login">
              Login
            </Nav.Link>
          )}
          {localStorage.getItem("token") && (
            <NavDropdown title="logout" id="collasible-nav-dropdown">
              <NavDropdown.Item to="/logout" id="logout" onClick={logOut}>
                Logout
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/profile" id="profile">
                Profile
              </NavDropdown.Item>
            </NavDropdown>
          )}
          <Nav.Link as={Link} to="/about">
            About
          </Nav.Link>
          <Nav.Link as={Link} to="/contact">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
Header.propTypes = {
  location: PropTypes.object.isRequired,
};

const FlexibleHeader = withRouter(Header);
export default FlexibleHeader;

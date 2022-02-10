import React from "react";
import { Link } from "react-router-dom";
import brlogo from "../../../public/assets/Logo.svg";
import { withRouter } from "react-router";
import PropTypes from "prop-types";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./style/header.scss";

const Header = ({ location }) => {
  const flexibleBgColor =
    location.pathname === "/" ||
    location.pathname.includes("results") ||
    location.pathname.includes("bootcamps")
      ? "linear-gradient(180deg, #E7F3E7 61.98%, #E7F3E7 78.88%)"
      : "#fff";
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
          <Nav.Link as={Link} to="/login" id="login">
            Login
          </Nav.Link>
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

import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav id="header-nav" style={navStyle}>
      <ul id="logo-wrapper" style={ulStyle}>
        <li id="header-logo">
          <Link to="/">
            <img
              id="brlogo"
              src="/public/assets/brlogo3.png"
              style={{ width: "auto", height: "30px" }}
            />
          </Link>
        </li>
      </ul>
      <ul style={ulStyle}>
        <li id="header-team" style={lists}>
          <Link to="/team" style={links}>
            Team
          </Link>
        </li>
        <li id="header-contact" style={lists}>
          <Link to="/contact" style={links}>
            Contact
          </Link>
        </li>
        <li
          id="header-legal"
          style={{ float: "left", marginRight: "1.2em", marginRight: "0", fontSize: "14px" }}
        >
          <Link to="/legal" style={links}>
            Terms
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;

// STYLES:
const navStyle = {
  display: "flex",
  flexWrap: "nowrap",
  justifyContent: "space-between",
  // background: "#f2f2f2",
  background: "transparent",
  padding: "0.2em 4em"
};
const ulStyle = {
  listStyle: "none",
  padding: "0.5em 0 0 0",
  height: "30px",
  lineHeight: "30px",
  verticalAlign: "middle"
};

const lists = {
  float: "left",
  marginRight: "1.2em",
  fontSize: "14px"
};
const links = {
  textDecoration: "none",
  color: "inherit"
};

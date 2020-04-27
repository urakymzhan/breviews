import React from "react";
import { Link } from "react-router-dom";
import brlogo from '../../../public/assets/brlogo3.png'

const Header = () => {
  return (
    <header>
      <nav id="header-nav" style={navStyle}>
      <ul id="logo-wrapper" style={ulStyle}>
        <li id="header-logo">
          <Link to="/">
            <img
              id="brlogo"
              src={brlogo}
              style={{ width: "auto", height: "30px" }}
            />
          </Link>
        </li>
      </ul>
      <ul style={ulStyle}>
        <li id="header-team" style={lists}>
          <Link to="/" style={links}>
            Home
          </Link>
        </li> 
        <li id="header-team" style={lists}>
          <Link to="/team" style={links}>
            About
          </Link>
        </li>
        <li id="header-team" style={lists}>
          <Link to="/patreon" style={links}>
            Patreon
          </Link>
        </li>
        <li id="header-team" style={lists}>
          <Link to="/blog" style={links}>
            Blog
          </Link>
        </li>
        <li id="header-contact" style={lists} >
          <Link to="/contact" style={links}>
            Contact
          </Link>
        </li>
        <li
          id="header-legal"
          style={lists}
        >
          <Link to="/legal" style={links}>
            Terms
          </Link>
        </li>
      </ul>
    </nav>
    </header>
  );
};

export default Header;

// STYLES:
const navStyle = {
  display: "flex",
  flexWrap: "nowrap",
  justifyContent: "space-between",
  background: "transparent",
  padding: "0 4em"
};
const ulStyle = {
  listStyle: "none",
  padding: "1em 0",
  fontSize: "14px",
};

const lists = {
  float: "left",
  margin: "0.4em 1.2em auto auto",
};
const links = {
  textDecoration: "none",
  color: "inherit"
};

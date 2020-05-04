import React from "react";
import { Link } from "react-router-dom";
import brlogo from '../../../public/assets/brlogo3.png'

const Header = () => {
  return (
    <header>
      <nav id="header-nav" style={style.nav}>
      <ul id="logo-wrapper" style={style.ul}>
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
      <ul style={style.ul}>
        <li id="header-team" style={style.lists}>
          <Link to="/" style={style.links}>
            Home
          </Link>
        </li> 
        <li id="header-team" style={style.lists}>
          <Link to="/team" style={style.links}>
            About
          </Link>
        </li>
        <li id="header-team" style={style.lists}>
          <Link to="/patreon" style={style.links}>
            Patreon
          </Link>
        </li>
        <li id="header-team" style={style.lists}>
          <Link to="/blog" style={style.links}>
            Blog
          </Link>
        </li>
        <li id="header-contact" style={style.lists} >
          <Link to="/contact" style={style.links}>
            Contact
          </Link>
        </li>
        <li
          id="header-legal"
          style={style.lists}
        >
          <Link to="/legal" style={style.links}>
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
const style = {
  nav: {display: "flex", flexWrap: "nowrap",  justifyContent: "space-between",  background: "transparent",   padding: "0 4em"},
  ul: { listStyle: "none", padding: "1em 0", fontSize: "14px" },
  lists: { float: "left", margin: "0.4em 1.2em auto auto" },
  links: { textDecoration: "none", color: "inherit"}
}

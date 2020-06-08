import React from "react";
import { Link } from "react-router-dom";
import brlogo from "../../../public/assets/Logo_placeholder.png";
import { withRouter } from "react-router";
import PropTypes from "prop-types";

import "./style/header.scss";

const Header = ({ location }) => {

    const flexibleBgColor =
      location.pathname === "/" || location.pathname.includes("results") || location.pathname.includes("bootcamps")
        ? { background: "linear-gradient(180deg, #E7F3E7 61.98%, #E7F3E7 78.88%)" }
        : { background: "#fff" };
    return (
      <header style={flexibleBgColor}>
        <nav id="header-nav">
          <ul className="header-left">
            <li>
              <Link to="/" className="links">
                <img className="brlogo" src={brlogo} />
              </Link>
            </li>
            <li className="leave-review">
              <Link
                to={{
                  pathname: '/results',
                  search: '?category=all'
                }}
                className="links"
              >
                Leave a review
              </Link>
            </li>
          </ul>
         
          <ul className="header-right">
            <li className="lists">
              <a
                href="https://www.patreon.com/user?u=35633615"
                target="_blank"
                className="links"
              >
                Patreon
              </a>
            </li>
            <li className="lists">
              <Link to="/about" className="links">
                About
              </Link>
            </li>
            <li className="lists">
              <Link to="/contact" className="links">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
}
Header.propTypes = {
  location: PropTypes.object.isRequired,
};

const FlexibleHeader = withRouter(Header);
export default FlexibleHeader;

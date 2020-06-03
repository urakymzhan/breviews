import React from "react";
import { Link } from "react-router-dom";
import brlogo from "../../../public/assets/brlogo3.png";
import { withRouter } from "react-router";
import PropTypes from "prop-types";

import "./style/header.scss";

const Header = props => {

    const { location } = props;
    const bgcolor =
      location.pathname === "/" || location.pathname.includes("results")
        ? { background: "#d7d7d7" }
        : { background: "#fff" };
    return (
      <header style={bgcolor}>
        <nav id="header-nav">
          <ul>
            <li id="header-logo">
              <Link to="/" className="links">
                <img id="brlogo" src={brlogo} />
              </Link>
            </li>
            <li id="leave-review">
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
          <ul>
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
              <Link to="/blog" className="links">
                Blog
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

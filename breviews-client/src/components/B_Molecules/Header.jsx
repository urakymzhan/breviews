import React from "react";
import { Link } from "react-router-dom";
import brlogo from '../../../public/assets/brlogo3.png'
import { withRouter } from "react-router";
import PropTypes from "prop-types";

class Header extends React.Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
  };

  render() {
    const { location } = this.props;
    const bgcolor = location.pathname === '/' || location.pathname === '/results' ? { background: '#d7d7d7'} : { background: '#fff'};
    return (
      <header style={bgcolor}>
        <nav id="header-nav" style={style.nav}>
        <ul id="logo-wrapper" style={style.ul}>
          <li id="header-logo" style={{float: "left", margin: "0.2em 1.2em auto auto" }}>
            <Link to="/" style={style.links}>
              <img
                id="brlogo"
                src={brlogo}
                style={{ width: "auto", height: "30px"}}
              />
            </Link>
          </li>
          <li id="header-logo" style={style.lists}>
            <Link to="/results" style={style.links}>
              Leave a review
            </Link>
          </li>
        </ul>
        <ul style={style.ul}>
          <li id="header-team" style={style.lists}>
            <Link to="/patreon" style={style.links}>
              Patreon
            </Link>
          </li>
          <li id="header-team" style={style.lists}>
            <Link to="/team" style={style.links}>
              About
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
        </ul>
      </nav>
      </header>
    );  
  }
};

const FlexibleHeader = withRouter(Header);
export default FlexibleHeader;

// STYLES:
const style = {
  nav: {display: "flex", flexWrap: "nowrap",  justifyContent: "space-between",  background: "transparent",   padding: "0 20px"},
  ul: { listStyle: "none", padding: "1em 0", fontSize: "12px", color: "#000" },
  lists: { float: "left", margin: "1em 1.2em auto auto" },
  links: { textDecoration: "none", color: "inherit"}
}

import React from "react";
import './style/footer.css'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer style={style.footerWrapper}>
      <div>
        <p>© 2020 BootcampAvenue</p> 
        <ul id="logo-wrapper" style={style.ul}>
          <li id="footer-about" style={style.lists} >
          <Link to="/team" style={style.links}>
              About
           </Link>
          </li>
          <li id="footer-terms" style={style.lists}>
          <Link to="/legal" style={style.links}>
              Terms
            </Link>
          </li>
        </ul>

        {/* /* <span>About</span> {" "} */}
        {/* {<span>Terms</span>} */}
      </div>
    </footer>
  );
};

export default Footer;

// STYLES:
const style = {
  footerWrapper: {  padding: "2em", background: "#788b95", fontSize: "12px", color: "#fff", textAlign: "center",},
  ul: { listStyle: "none", fontSize: "12px" },
  lists: { display: "inline-block", padding: "7px"},
  links: { textDecoration: "none", color: "inherit"}
}


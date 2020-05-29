import React from "react";
import "./style/footer.scss";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={style.footerWrapper}>
      <div>
        <p>
          <Link to="/team" style={{color: "inherit"}}>About</Link> {" "}
          <Link to="/legal"  style={{color: "inherit"}}>Terms</Link>
        </p>
        <p>© 2020 BootcampAvenue</p>
      </div>
    </footer>
  );
};

export default Footer;

// STYLES:
const style = {
  footerWrapper: {
    padding: "2em",
    background: "#788b95",
    fontSize: "12px",
    color: "#fff",
    textAlign: "center"
  },
};

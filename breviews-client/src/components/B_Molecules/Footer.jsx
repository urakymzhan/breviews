import React from "react";
import "./style/footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div>
        <Link to="/team">About</Link> <Link to="/legal">Terms</Link>
        <p>© 2020 BootcampAvenue</p>
      </div>
    </footer>
  );
};

export default Footer;

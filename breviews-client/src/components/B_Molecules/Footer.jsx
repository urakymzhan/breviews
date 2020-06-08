import React from "react";
import "./style/footer.scss";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

const Footer = ({location}) => {
  
  const flexibleDisplay = location.pathname.includes("write-review") || location.pathname.includes("form-complete")
    ? { display: "none" }
    : { display: "block" };
  return (
    <footer style={flexibleDisplay}>
      <div className="ftr-fake-brder">
        {/* empty border */}
      </div>
      <div className="ftr-s1">
        <div className="s1-s1">
          <h4>BOOTCAMP</h4>
          <h4>AVENUE<span style={{color: "#E4FAA6"}}>.</span></h4> 
        </div>
        <div className="s1-s2">
        <p className="terms"><Link to="/legal">Terms of Use</Link></p>
        <p className="pp"><Link to="/legal">Privacy Policy</Link></p>
        <p className="copyright">© BootcampAvenue 2020</p>
        </div>
      </div>
    </footer>
  );
};

export default withRouter(Footer);

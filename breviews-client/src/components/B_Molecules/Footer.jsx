import React from "react";
import './style/footer.css'

const Footer = () => {
  return (
    <footer style={style.footerWrapper}>
      <div>
        <p>© 2020 BootcampAvenue</p> 
        <span>About</span> {" "}
        <span>Terms</span>
      </div>
    </footer>
  );
};

export default Footer;

// STYLES:
const style = {
  footerWrapper: {  padding: "2em", background: "#788b95", fontSize: "12px", color: "#fff", textAlign: "center",}
}


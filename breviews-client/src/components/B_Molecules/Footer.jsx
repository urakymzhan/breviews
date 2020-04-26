import React from "react";

const Footer = () => {
  return (
    <footer style={footerWrapperStyle}>
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
const footerWrapperStyle = {
  padding: "2em",
  background: "#788b95",
  fontSize: "12px",
  color: "#fff"
};

import React from "react";

const Footer = () => {
  return (
    <footer style={footerWrapperStyle}>
      <p>© 2020 Breviews</p>
    </footer>
  );
};

export default Footer;

// STYLES:
const footerWrapperStyle = {
  background: "#788b95",
  padding: "2em",
  color: "#fff",
  position: "absolute",
  bottom: "0",
  left: "0",
  right: "0",
  width: "100%",
  fontSize: "12px",
  textAlign: "center"
};

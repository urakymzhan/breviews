import React from "react";
import Footer from "../B_Molecules/Footer.jsx";

const Legal = () => {
  return (
    <div className="legal-wrapper" style={legalWrapperStyle}>
      <div className="legal-box" style={legalBoxStyle}>
        <h3>Statement</h3>
        <p style={{ color: "gray" }}>
          This platform uses 100% trusted user reviews and data from around the
          country/world. We check every review in details. Requiring extra steps
          before leaving the them. This makes sure that reviews left are out of
          manupilation and third party interference.
        </p>
        <h3>Disclaimer</h3>
        <p style={{ color: "gray" }}>
          If you are a company that has concerns regarding information provided
          please feel free to contact us directly for resolution.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Legal;

// STYLES:
const legalWrapperStyle = {
  position: "relative",
  margin: "0",
  padding: "100px 0 100px 0",
  minHeight: "100%"
};

const legalBoxStyle = {
  width: "40%",
  margin: "100px auto",
  boxShadow: "0 10px 20px 0px gray",
  padding: "2em",
  borderRadius: "5px",
  backgroundColor: "#fff",
  fontSize: "14px"
};

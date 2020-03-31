import React from "react";
import { motion } from "framer-motion";
import "../../style/landing.css";

export default function Intro() {
  // animation variable
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  return (
    <motion.div
      className="intro"
      style={intro}
      initial="hidden"
      animate="visible"
      transition={{ duration: 8, times: [0, 0.6, 1] }}
      variants={variants}
    >
      <h5 style={{ marginBottom: "0.2em"}}>
        Not sure which bootcamp to choose?
      </h5>
      <p style={{ marginTop: "0", color: "#333"}}>
        This platform will help you decide
      </p>
    </motion.div>
  );
}

// STYLES:
const intro = {
  background: "#f2f2f2",
  width: "40%",
  margin: "0 auto",
  padding: "0.8em",
  textAlign: "center",
  borderRadius: "4px",
  color: "#000000"
};

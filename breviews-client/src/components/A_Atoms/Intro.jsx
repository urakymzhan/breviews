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
      <h2 style={{ marginBottom: "0.2em", color: "#333" }}>
        Not sure which bootcamp to choose?
      </h2>
      <p style={{ marginTop: "0", color: "#fffbd7" }}>
        This platform will help you decide
      </p>
    </motion.div>
  );
}

// STYLES:
const intro = {
  background: "rgb(255, 51, 0, 0.8)",
  width: "40%",
  margin: "0.8em auto",
  padding: "0.8em",
  textAlign: "center",
  borderRadius: "2px"
};

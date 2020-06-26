import React from "react";
import { useLocation, Link } from "react-router-dom";

export default function NotFoundPage() {
  let location = useLocation();
  return (
    <div style={{ textAlign: "center" }}>
      <h3 style={{ textAlign: "center", margin: "50px auto" }}>
        Page not found for <code>{location.pathname}</code>
      </h3>
        <Link to="/" style={{color: "#e83e8c"}}>Return to home page</Link>
    </div>
  );
}

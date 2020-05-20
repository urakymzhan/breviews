import React from "react";
import { useLocation } from "react-router-dom";

export default function NotFoundPage() {
  let location = useLocation();
  return (
    <h1 style={{ textAlign: "center", margin: "50px auto" }}>
      Page not found for <code>{location.pathname}</code>
    </h1>
  );
}

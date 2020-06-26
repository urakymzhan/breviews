import React from "react";
import RotateLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/core";

export default function Spinner() {
  return (
    <div>
      {/* <h1 style={{ margin: "50px auto", fontSize: "60%" }}>fetching...</h1> */}
      <div className="sweet-loading">
        <RotateLoader css={override} size={100} color={"#123abc"} />
      </div>
    </div>
  );
}

// STYLES:
const override = css`
  display: block;
  margin: 200px auto;
  border-color: black;
`;

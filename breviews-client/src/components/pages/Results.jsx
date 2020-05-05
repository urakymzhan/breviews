import React from "react";
import "./style/landing.css";
import { Link } from "react-router-dom";
import { SearchBanner, Spinner } from '../A_Atoms';

const Results = () => {

  let content = <Spinner />;

  if (true) {
    content = (
      <div>
          All Results
      </div>
    );
  }
  return (
    <div className="main-wrapper">
      <SearchBanner />
        {content}
    </div>
  );
}

export default Results;

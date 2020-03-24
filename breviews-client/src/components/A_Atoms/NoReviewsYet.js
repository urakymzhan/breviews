import React from "react";

export default function NoReviewsYet() {
  return (
    <div className="first-review-wrapper">
      <div className="first-review">
        <h4 id="review-author">anonymous</h4>
        <p id="review-date"> </p>
        <p id="review-pros">
          <span>PROS: </span>
        </p>
        <p>
          <span>CONS: </span>
        </p>
        <p>
          <span id="year-graduated">Year graduated: </span>
        </p>
        <p id="review-text">no reviews yet</p>
      </div>
    </div>
  );
}

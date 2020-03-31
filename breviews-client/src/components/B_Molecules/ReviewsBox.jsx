import React from "react";
import "../../style/style.css";

export default function ReviewsBox(props) {
  const { reviewsData } = props;

  console.log("reviewsData", reviewsData);

  return reviewsData.map(user => {
    return (
      <div className="review-wrapper" key={user.id}>
        <p id="review-author">anonymous</p>
        <p id="review-date"> {user.date} </p>
        <p id="review-pros">
          <span>PROS: </span>
          {user.pros}
        </p>
        <p id="review-cons">
          <span>CONS: </span>
          {user.cons}
        </p>
        <p id="year-graduated">
          <span>Year graduated: </span>
          {user.dateGraduated}
        </p>
        <p id="review-text">{user.review}</p>
      </div>
    );
  });
}

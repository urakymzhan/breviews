import React from "react";

export default function ReviewsBox(props) {
  const { reviewsData } = props;

  return reviewsData.map(user => {
    return (
        <div className="review-wrapper" key={user._id}>
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
            <span>Graduation Year: </span>
            {user.dateGraduated}
          </p>
          <p id="review-text">{user.review}</p>
        </div>
    );
  });
}

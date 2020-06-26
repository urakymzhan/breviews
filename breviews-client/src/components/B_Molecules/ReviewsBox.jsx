import React from "react";
import "./style/reviewbox.scss";
import { Ratings } from "../A_Atoms";

const ReviewsBox = (props) => {
  const { reviewsData } = props;

  return reviewsData.map((user) => {
    let emptyInd;
    let name;
    if (user.customerName.indexOf(" ") > -1) {
      emptyInd = user.customerName.indexOf(" ");
      name =
        user.customerName.slice(0, emptyInd) +
        " " +
        user.customerName.slice(emptyInd + 1, emptyInd + 2) +
        ".";
    }
    const reviewDate = new Date(user.date);

    return (
      <div className="review-wrapper" key={user._id}>
        <div className="reviews-nav">
          <div className="reviews-nav-nested">
            <div className="avatar-review">
              <p>{user.customerName[0]}</p>
            </div>
            <div className="author-author-ratings">
              <p id="review-author">
                {user.customerName.indexOf(" ") > -1 ? name : user.customerName}
              </p>
              <p>
                <Ratings
                  classname="star-rating-container"
                  overall={user.star}
                />
              </p>
            </div>
            {/* <div className="author-company">
              <p >Current Employee - Facebook</p>
            </div> */}
          </div>
          <div>
            <p id="review-date">
              {" "}
              {reviewDate.getMonth() +
                1 +
                "/" +
                reviewDate.getDate() +
                "/" +
                reviewDate.getFullYear().toString().substr(-2)}{" "}
            </p>
          </div>
        </div>

        <div className="reviews-cnt">
          <p id="review-title">{user.title} </p>

          <p id="review-text">{user.review}</p>

          <div id="review-pros">
            <p className="highlight">Pros: </p>
            <p>{"- " + user.pros}</p>
          </div>
          <div id="review-cons">
            <p className="highlight">Cons: </p>
            <p>{"- " + user.cons}</p>
          </div>
        </div>
      </div>
    );
  });
};

export default ReviewsBox;

import React from "react";
import "./style/reviewbox.scss";
import { Ratings } from "../A_Atoms";

const ReviewsBox = (props) => {
  const { reviewsData } = props;
  console.log("reviewsData from Box", reviewsData)

  return reviewsData.map((user) => {
    let emptyInd;
    let name;
    if (user.customerName.indexOf(' ') > -1) {
      emptyInd = user.customerName.indexOf(' ')
      name = user.customerName.slice(0, emptyInd) + " " + user.customerName.slice(emptyInd+1, emptyInd+2) + ".";
    } 
    const reviewDate = new Date(user.date);

    return (
      <div className="review-wrapper" key={user._id}>

        <div className="review-left-side">
          <div className="avatar-review">{user.customerName[0]}</div>
        </div>

        <div className="review-right-side">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "10px",
            }}
          >
            <div>
              <p id="review-author">{user.customerName.indexOf(' ') > -1 ? name: user.customerName}</p>
              <Ratings classname="star-rating-container" overall={user.star} />
            </div>
            <p id="review-date"> {(reviewDate.getMonth() + 1) + "/" + reviewDate.getDate() + '/' + reviewDate.getFullYear().toString().substr(-2)} </p>
          </div>
          
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
}

export default ReviewsBox;
import React, { Fragment, useEffect } from "react";
import "./style/bootcamp.css";
import { withRouter } from "react-router";
import { ReviewSubmitForm, ReviewsBox } from "../B_Molecules";
import { SortReviews, Spinner } from "../A_Atoms";
import { EMPTY_REVIEW_TEXT } from "../../utils/constants";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  getBootcampData,
  addBootcampReview,
} from "../../redux/actions/bootcamp";
import Rating from "react-rating";
import { Link } from 'react-router-dom';

const INITIAL_STATE = {
  review: "",
  customerName: "",
  pros: "",
  cons: "",
  dateGraduated: "",
  jobfound: "Yes",
  customerLinkedin: "",
};

const Bootcamp = ({ getBootcampData, localData, name, addBootcampReview }) => {


  useEffect(() => {
    getBootcampData(name);
  }, []);

  console.log("localData", localData);

  // TODO: destructure localData when not empty
  return (
    <Fragment>
      {localData.length === 0 ? (
        <Spinner />
      ) : (
        <div className="reviews-content-wrapper">
          <div className="reviews-header-wrapper">
          <div className="bootcamp-logo">
            <h3>LOGO</h3>
          </div>
          <div className="bootcamp-info">
            <h3>{localData[0].customName}  {" "}
            <a href={localData[0].website} target="_blank">
              <img src="https://cdn1.iconfinder.com/data/icons/feather-2/24/external-link-512.png" style={{height: "16px", width: "auto"}}/>
            </a>
            </h3>
            {/* move this to ReadOnlyReviewsStar.jsx */}
            <div className="bootcamp-info-row1">
              <Rating
                className="star-rating-container"
                start={0}
                stop={5}
                fractions={2}
                placeholderRating={localData[0].overall}
                emptySymbol={
                  <img
                    id="rating-empty-star-main"
                    src="../../public/assets/rating-off.png"
                  />
                }
                placeholderSymbol={
                  <img
                    id="rating-full-star-main"
                    src="../../public/assets/rating-on.png"
                  />
                }
                readonly
              />
              <p>
                {localData[0].reviewsCount} reviews
              </p>
              <p>
                <img src="https://cdn3.iconfinder.com/data/icons/linecons-free-vector-icons-pack/32/location-512.png" style={{height: "12px", width: "auto"}}/>
                { localData[0].location }
              </p>
              </div>
              <div className="bootcamp-info-row2">
                <button>Frontend</button>
                <button>Fullstack</button>
                <button>JavaScript</button>
                <button>Remote</button>
                <button>Career Services</button>
              </div>
              <div className="bootcamp-info-row3">
                <p><span>Duration: </span> {localData[0].duration}</p>
                <p><span>Price: </span> {localData[0].price}</p>
              </div>
              <SortReviews />
          </div>

          </div>
          <div className="reviews-wrapper">
            <div className="bootcamp-write-a-review">
              <h6>Write a Review</h6>
              <p>Have you completed a bootcamp lorem ipsum lorem ipsum lorem ipsum</p>
              <Link to={`/write-review/${localData[0].schoolname}`}><button>Review</button></Link>
            </div>

            <div className="customer-reviews">
              <div>
                {localData.length === 0 || localData[0].reviews.length === 0 ? (
                  <div>
                    <p id="empty-review-text"> {EMPTY_REVIEW_TEXT} </p>
                  </div>
                ) : (
                  <ReviewsBox reviewsData={localData[0].reviews} />
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

Bootcamp.protoType = {
  localData: PropTypes.array.isRequired,
  getBootcampData: PropTypes.func.isRequired,
  addBootcampReview: PropTypes.func.isRequired,
};
const mapStateToProps = (state, { match }) => ({
  localData: state.bootcamp.localData,
  name: match.params.name,
});
const mapDispatchToProps = (dispatch) => {
  return {
    getBootcampData: (name) => dispatch(getBootcampData(name)),
    // how dataToPost accessed from here (dispatch?)
    addBootcampReview: (dataToPost, name) =>
      dispatch(addBootcampReview(dataToPost, name)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Bootcamp)
);




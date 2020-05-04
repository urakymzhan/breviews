import React, { Fragment, useEffect } from "react";
import "../../style/bootcamp.css";
import "../../style/landing.css";
import { withRouter } from "react-router";
import ReviewSubmitForm from "../B_Molecules/ReviewSubmitForm.jsx";
import ReviewsBox from "../B_Molecules/ReviewsBox.jsx";
import SortReviews from "../A_Atoms/SortReviews.jsx";
import { EMPTY_REVIEW_TEXT } from "../constants/constants";
import { Button }  from 'react-bootstrap';
import Spinner from "../A_Atoms/Spinner";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getBootcampData, addBootcampReview } from '../../redux/actions/bootcamp';
import useFormValidation from '../../utils/useFormValidation';
import validateAuth from '../../utils/validateAuth';

const INITIAL_STATE = {
  review: '',
  customerName: '',
  pros: '',
  cons: '',
  dateGraduated: '',
  jobfound: 'Yes',
  customerLinkedin: ''
}

const Bootcamp = ({ getBootcampData, localData, name, addBootcampReview }) => {

  useEffect (() => {
    getBootcampData(name);
  }, [])

  // validate and post form
  const { 
    handleChange, values, handleSubmit, show, 
    ratingValue, handleShow, handleStar, 
    handleClose, handleBlur, errors, isSubmitting 
  }  = useFormValidation(INITIAL_STATE, validateAuth, addBootcampReview, name )

    return (
      <Fragment>
        {localData.length === 0 ? (
          <Spinner />
        ): 
        (
        <div className="reviews-content-wrapper">

          <div className="reviews-header-wrapper">
            <div className="reviews-header">
              <h2>
                <span style={{ textTransform: "uppercase" }}>{localData[0].customName}</span>{" "}
                {/* <span id="reviews-header-span">REVIEWS</span> */}
              </h2>
            </div>
            <div className="bootcamp-info-row1">
              <div>
                <img src="../../public/assets/web-icon.png" style={{verticalAlign: "middle", height: "12px", width: "auto"}}/> {""}
                <a href={localData[0].website} target="_blank" style={{verticalAlign: "middle", height: "12px", width: "auto", color: "#795548"}}>{localData[0].website}</a>
              </div>
              <div>LOCATION ICON > {localData[0].location} </div>
              <div>TYPE: Private</div>
            </div>
            <div className="bootcamp-info-row2">
              <div>DURATION:  {localData[0].duration} </div>
              <div>ITBACKGROUND: {localData[0].itbackground}</div>
              <div>PRICE: {localData[0].price}</div>
            </div>
            <div className="bootcamp-info-row3">
              <div>ACADEMICS: Here we need to show what they teach...</div>
            </div>
            <div className="bootcamp-info-row4">
              <div>SCHEDULE: Here we need show when they teach, from what time to what time</div>
            </div>
            <div style={{textAlign: "right"}}>
              <Button className="write-review-btn" variant="outline-light" onClick={handleShow} >
                Write a Review
              </Button>
            </div>
          </div>
            <div style={{width: "50%", margin:'0 auto'}}>
              <SortReviews />
              {/*  REVIEWS START */}
              <div className="customer-reviews">
                {localData.length === 0 || localData[0].reviews.length === 0 ? (
                  <div>
                    <h3 id="empty-review-text"> {EMPTY_REVIEW_TEXT} </h3>
                  </div>
                ) : (
                  <ReviewsBox reviewsData={localData[0].reviews} />
                )}
                  {/* experimental */}
                  <div style={{textAlign: "center", padding: "10px", color: "#fff", fontWeight: "bold", background: "#a1cee1"}}>
                    Show More (ideally icon)
                  </div>
              </div>
              {/*  REVIEWS END */}

              <ReviewSubmitForm
                  localData={localData}
                  handleChange={handleChange}
                  handleSubmit={handleSubmit}
                  name={name}
                  show={show}
                  handleClose={handleClose}
                  values={values}
                  handleStar={handleStar}
                  ratingValue={ratingValue}
                  handleBlur={handleBlur} 
                  errors={errors}
                  isSubmitting={isSubmitting}
              />
          </div>
        </div>
        )}
      </Fragment>
    )
  }

  Bootcamp.protoType = {
    localData: PropTypes.array.isRequired,
    getBootcampData: PropTypes.func.isRequired,
    addBootcampReview: PropTypes.func.isRequired
  }
  const mapStateToProps = (state, { match }) => ({
      localData: state.bootcamp.localData,
      name: match.params.name
  })
  const mapDispatchToProps = dispatch => {
    return {
      getBootcampData: name => dispatch(getBootcampData(name)),
      // how dataToPost accessed from here (dispatch?)
      addBootcampReview: (dataToPost, name) => dispatch(addBootcampReview(dataToPost, name))
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Bootcamp));

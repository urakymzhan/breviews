import React, { Fragment, useState, useEffect, useReducer } from "react";
import "../../style/bootcamp.css";
import "../../style/landing.css";
import { withRouter } from "react-router";
import ReviewSubmitForm from "../B_Molecules/ReviewSubmitForm.jsx";
import ReviewsBox from "../B_Molecules/ReviewsBox.jsx";
import SortReviews from "../A_Atoms/SortReviews.jsx";
import { EMPTY_REVIEW_TEXT } from "../constants/constants";
import { v4 as uuidv4 } from "uuid";
import { Button }  from 'react-bootstrap';
import Spinner from "../A_Atoms/Spinner";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getBootcampData, addBootcampReview } from '../../redux/actions/bootcamp';
import {
  MODE,
  ITBACKGROUND,
  LOCATION,
  DURATION,
  PRICE
} from "../constants/constants";

const Bootcamp = ({ getBootcampData, localData, name, addBootcampReview }) => {

  const[ratingValue, setRatingValue] = useState(0);
  const [show, setShow ] = useState(false);
  // handle multiple inputs
  const [formInput, setFormInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      review: '',
      customerName: '',
      pros: '',
      cons: '',
      dateGraduated: '',
      jobfound: 'Yes',
      customerLinkedin: ''
    }
  )

  useEffect (() => {
    getBootcampData(name);
  }, [])

  const handleChange = e => {
    let target = e.target;
    let value = target.value;
    let name = target.name;
    setFormInput({ [name]: value });
  };

  const handleSubmit = (e, name) => {
    e.preventDefault();
    const {review, customerName, pros, cons, dateGraduated, jobfound, customerLinkedin } = formInput;
    const today = new Date().toLocaleDateString("en-US");
    const reviewID = uuidv4();

    // TODO: maybe store this in state so you can pass to addBootcampReview in actions
    // state = {
    //   text: '',
    // }
  
    // handleSubmit = () => {
    //   this.props.postComment(this.state.text);
    // }
  
    const dataToPost = {
      id: reviewID,
      customerName,
      date: today,
      pros,
      cons,
      dateGraduated,
      star: ratingValue,
      jobfound,
      review,
      customerLinkedin
    };
    // push new review to state
    // TODO: ARE WE MUTATING THE STATE ?
    localData[0].reviews.push(dataToPost);
    // posts but redux is failing
    addBootcampReview(dataToPost, name)
    // reset
    setFormInput({
      review: "",
      customerName: "",
      pros: "",
      cons: "",
      dateGraduated: '',
      jobfound: "Yes",
      customerLinkedin: ''
    });

    // close modal
    handleClose();
  };
  const handleShow = e => {
    setShow(true);
  };
  const handleClose = e => {
    setShow(false);
  };
  const handleStar = (starVal) => {
    setRatingValue(starVal)
  }

  console.log("localData: ", localData);

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
              <span id="reviews-header-span">REVIEWS</span>
            </h2>
          </div>
          <div>
            <p id="bootcamp-definition">
              <img src="../../public/assets/web-icon.png" style={{verticalAlign: "middle", height: "12px", width: "auto"}}/> {""}
              <a href={localData[0].website} target="_blank" style={{verticalAlign: "middle", height: "12px", width: "auto", color: "#795548"}}>{localData[0].website}</a>
            </p> 
            <p id="bootcamp-definition">
              <span id="bootcamp-highlight">{MODE}: </span>{" "}
              {localData[0].mode}
            </p>
            <p id="bootcamp-definition">
              <span id="bootcamp-highlight">{ITBACKGROUND}: </span>{" "}
              {localData[0].itbackground}
            </p>
            <p id="bootcamp-definition">
              <span id="bootcamp-highlight">{LOCATION}: </span>
              {localData[0].location}
            </p>
            <p id="bootcamp-definition">
              <span id="bootcamp-highlight">{DURATION}: </span>
              {localData[0].duration}
            </p>
            <p id="bootcamp-definition">
              <span id="bootcamp-highlight">{PRICE}: </span>
              {localData[0].price}
            </p>
          </div>
        </div>
        
        <div style={{width: "50%", margin:'0 auto'}}>
        <div>
          <Button className="write-review-btn" variant="outline-light" onClick={handleShow} >
            Write a Review
          </Button>
        </div>
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
        </div>
        {/*  REVIEWS END */}

        <ReviewSubmitForm
            localData={localData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            name={name}
            show={show}
            handleClose={handleClose}
            formInput={formInput}
            handleStar={handleStar}
            ratingValue={ratingValue}
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
  const mapDispatchToProps = dispatch => ({
      getBootcampData: name => dispatch(getBootcampData(name)),
      // how dataToPost accessed from here (dispatch?)
      addBootcampReview: (dataToPost, name) => dispatch(addBootcampReview(dataToPost, name))
  });

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Bootcamp));

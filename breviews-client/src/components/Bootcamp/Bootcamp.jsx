import React, { Fragment, useState, useEffect, useReducer } from "react";
import "../../style/style.css";
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
import { getBootcampData } from '../../redux/actions/bootcamp';


const Bootcamp = ({ getBootcampData, localData, name }) => {

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

  // condition must be bigger than 0
  const [ratingValueError, setRatingValueError] = useState(''); 
  // shouldn't be empty and must be string type
  const [nameError, setNameError] = useState('');
   // shouldn't be empty and must be number type
  const [graduateDateError, setGraduateDateError] = useState('');
   // shouldn't be empty and must be string type
  const [reviewError, setReviewError] = useState('');
   // should include linkedin word and same name. Shouldn't be empty and must be string type
  const [linkedinError, setLinkedinError] = useState('');


  useEffect (() => {
    console.log("name from useEffect:", name)
    getBootcampData(name);
  }, [])

  const handleChange = e => {
    let target = e.target;
    let value = target.value;
    let name = target.name;
    setFormInput({ [name]: value });
  };

  // const validateReviewSubmitForm = () => {
  //   console.log('hi from validate')
  //   if(formInput.customerName.length === 0 || typeof formInput.customerName !== 'string') {
  //     setNameError('Name shouldn\'t be empty');
  //   }
  // }

  const handleSubmit = (e, name) => {
    e.preventDefault();

    // validateReviewSubmitForm();

    const {review, customerName, pros, cons, dateGraduated, jobfound, customerLinkedin } = formInput;
    const today = new Date().toLocaleDateString("en-US");
    const reviewID = uuidv4();

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
    // pushing new review obj to state
    localData[0].reviews.push(dataToPost);

    // get this localData
    // then in action just use it
    if (review.length > 0) {
      fetch(`/api/bootcamps/${name}`, {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(dataToPost)
      });
    }
    // setLocalData(localData);
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

  console.log("localData hey: ", localData);

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
            <p style={{display: "inline-block", height: "40px", lineHeight: "40px"}}><img src="../../public/assets/web-icon.png" style={{verticalAlign: "middle", height: "12px", width: "auto"}}/> <a href={localData[0].website} target="_blank" style={{verticalAlign: "middle", height: "12px", width: "auto", color: "#795548"}}>{localData[0].website}</a></p> 
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
            nameError={nameError}
      />
      </div>
      </div>
      )}
    </Fragment>
  )
  }

    
  Bootcamp.protoType = {
    localData: PropTypes.array.isRequired,
    getBootcampData: PropTypes.func.isRequired
  }
  const mapStateToProps = (state, { match }) => ({
      localData: state.bootcamp.localData,
      name: match.params.name
  })
  const mapDispatchToProps = dispatch => ({
      getBootcampData: name => dispatch(getBootcampData(name))
  });

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Bootcamp));

import React, { Component } from "react";
import { useFormik, useField, Field, Formik, ErrorMessage, Form } from "formik";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import Rating from "react-rating";
import "./style/reviewformpage.css";
import * as Yup from 'yup';

// Star rating value doesnt work with yup right now
// const ReviewFormSchema = Yup.object().shape({
//   customerName: Yup.string()
//     .min(2, 'Too short!')
//     .max(50, 'Too long!')
//     .required('Required!'),
//     title: Yup.string()
//     .required('Required!'),
//   review: Yup.string()
//     .max(200, 'Review too long!')
//     .required('Required!'),
//   email: Yup.string()
//     .email('Invalid email')
//     .required('Required!'),
//   acceptTerms: Yup.boolean()
//     .required('Please accept terms')
//     .oneOf([true], 'Please accept terms'),
//   ratingVal: Yup.number()
//     .min(1, 'Required!')
// })


const MyStarInput = ({ratingVal, handleStar, ...props}) => {
  const [field, meta ] = useField(props);
  return (
    <Rating
          className="star-rating-container"
          start={0}
          stop={5}
          initialRating={ratingVal}
          onClick={handleStar}
          emptySymbol={
            <img
              id="rating-empty-star"
              src="../../public/assets/rating-off.png"
            />
          }
          fullSymbol={
            <img
              id="rating-full-star"
              src="../../public/assets/rating-on.png"
            />
          }
        />
  )
} 

class ReviewFormPage extends Component {
  state = {
    ratingVal: 0
  }

  handleSubmit = (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);
    const { ratingVal } = this.state;
    values.star = ratingVal;
    delete values.acceptTerms;
    const today = new Date();
    values.date = today;
    // post here
    // repeated params code
    const { match } = this.props;
    const name = match.params.name;
    fetch(`/api/bootcamps/${name}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(values),
    });
    console.log(values)
    setSubmitting(false);
    resetForm();
    this.setState({ ratingVal: 0 });
  };

  handleStar = (clickedVal) => this.setState({ ratingVal: clickedVal });

  validate = (values) => {
    const { ratingVal } = this.state;
    let errors = {};

    if (!values.customerName) {
      errors.customerName = "Required";
    }
    if (!values.title) {
      errors.title = "Required";
    } else if (
      values.title.split(" ").length < 3
    ) {
      errors.title = "Please write at least 3 words";
    }
    if (!values.review) {
      errors.review = "Required";
    } else if (
      values.review.split(" ").length < 20
    ) {
      errors.review = "Please write at least 20 words";
    }
    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }
    if (!values.acceptTerms) {
      errors.acceptTerms = "Please accept terms";
    }
    if (ratingVal === 0) {
      errors.ratingVal = "Required";
    }
    return errors;
  };

  render() {
    // repeated params code
    const { match } = this.props;
    const schoolName = match.params.name;
    console.log(schoolName);
    return (
      <div className="review-form-container">
        <h3>{schoolName}</h3>
        <ReviewForm 
          onSubmit={this.handleSubmit}
          handleStar={this.handleStar}
          ratingVal={this.state.ratingVal}
          validate={this.validate}
        />
      </div>
    );
  }
}

const ReviewForm = (props) => {
  const { onSubmit, handleStar, ratingVal, validate } = props;
  return (
    <div>
    <Formik
      validateOnChange={true}
      initialValues={{
        customerName: "",
        review: "",
        pros: "",
        cons: "",
        title: "",
        email: "",
        acceptTerms: false,
        ratingVal: ratingVal
      }}
      validate={validate}
      onSubmit={onSubmit}
    >
      {({ values, errors, isSubmitting }) => (
        <Form className="review-submit-form">
          <div>
            <label htmlFor="customerName">Name* </label>
            <Field
              placeholder="Name"
              name="customerName"
              type="input"
            />
            <ErrorMessage name="customerName" render={msg => <div>{msg}</div>} />
          </div>
          <div>
            <label>Select Rating*</label>
            <MyStarInput name="ratingVal" handleStar={handleStar} ratingVal={ratingVal} value={ratingVal}/>
            <ErrorMessage name="ratingVal" render={msg => <div>{msg}</div>} />
          </div>
          <div>
            <label htmlFor="title"> Title of your review* </label>
            <Field
              placeholder="Best bootcamp, reccomend..."
              name="title"
              type="input"
            />
            <span className="input-footers">( 3 word minimum )</span>
            <ErrorMessage name="title" render={msg => <div>{msg}</div>} />
          </div>

          <div>
            <label htmlFor="review"> Your Review* </label>
            <Field
              className="review"
              name="review"
              type="textarea"
            />
            <span className="input-footers">( 20 word minimum )</span>
            <ErrorMessage name="review" render={msg => <div>{msg}</div>} />
          </div>
          <div>
            <label htmlFor="pros"> Pros </label>
            <Field
              className="pros"
              placeholder="Share some pros of this bootcamp"
              name="pros"
              type="textarea"
            />
          </div>
          <div>
          <label htmlFor="cons"> Cons </label>
            <Field
              className="cons"
              placeholder="Share some cons of this bootcamp"
              name="cons"
              type="textarea"
            />
          </div>
          <div>
          <label htmlFor="cons"> Email* </label>
            <Field
              name="email"
              type="email"
            />
            <ErrorMessage name="email" render={msg => <div>{msg}</div>} />
          </div>
          <div>
            <Field name="acceptTerms" type="checkbox" />
            <label className="checkbox-label">I agree to BootcampAvenue Terms of Use. This review of my experience at this bootcamp is truthful*</label>
            <ErrorMessage name="acceptTerms" render={msg => <div>{msg}</div>} />
          </div>
          <div>
            <button disabled={isSubmitting} type="submit" className="form-submit-btn">
              Post Review
            </button>
            <pre>{JSON.stringify(values, null, 2)}</pre>
            <pre>{JSON.stringify(errors, null, 2)}</pre>
          </div>
        </Form>
      )}
    </Formik>
  </div>  
  );
};




export default withRouter(ReviewFormPage);

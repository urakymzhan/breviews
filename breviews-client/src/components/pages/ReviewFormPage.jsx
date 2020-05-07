// Render Prop
import React, { Component } from "react";
import { useFormik } from "formik";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import Rating from "react-rating";
import "./style/reviewformpage.css";

class ReviewFormPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ratingVal: 0,
      initialValues: {
        customerName: "",
        dateGraduated: "",
        pros: "",
        cons: "",
        review: "",
        email: "",
        acceptTerms: false,
      },
    };
  }

  handleStar = (clickedVal) => this.setState({ ratingVal: clickedVal });

  onSubmit = (values, { setSubmitting, resetForm }) => {
    const { ratingVal } = this.state;
    values.star = ratingVal;
    delete values.acceptTerms;
    const today = new Date().toLocaleDateString();
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
    console.log(values);
    setSubmitting(false);
    resetForm();
    this.setState({ ratingVal: 0 });
  };

  validate = (values) => {
    const { ratingVal } = this.state;
    let errors = {};

    if (!values.customerName) {
      errors.customerName = "Required";
    }
    if (!values.dateGraduated) {
      errors.dateGraduated = "Required";
    }
    if (!values.review) {
      errors.review = "Required";
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
    // console.log("errors", errors);
    return errors;
  };
  render() {
    // repeated params code
    const { match } = this.props;
    const schoolName = match.params.name;
    console.log(schoolName);
    const { ratingVal, initialValues } = this.state;
    return (
      <div className="review-form-container">
        <h3>{schoolName}</h3>
        <ReviewForm
          handleStar={this.handleStar}
          ratingVal={ratingVal}
          onSubmit={this.onSubmit}
          validate={this.validate}
          initialValues={initialValues}
        />
      </div>
    );
  }
}

const ReviewForm = (props) => {
  const { handleStar, ratingVal, onSubmit, validate, initialValues } = props;
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });
  return (
    <form onSubmit={formik.handleSubmit} className="review-submit-form">
      <div>
        <label htmlFor="customerName">Name* </label>
        <input
          className="customerName"
          placeholder="Name"
          name="customerName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.customerName}
        />
        {formik.errors.customerName && formik.touched.customerName ? (
          <div>{formik.errors.customerName}</div>
        ) : null}
      </div>

      <div>
        <label htmlFor="email">Select rating* </label>
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
        {formik.errors.ratingVal || formik.touched.ratingVal ? (
          <div>{formik.errors.ratingVal}</div>
        ) : null}
      </div>

      <div>
        <label htmlFor="review">
          Your Review*
          <textarea
            className="review"
            name="review"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.review}
          />
        </label>
        {formik.errors.review && formik.touched.review ? (
          <div>{formik.errors.review}</div>
        ) : null}
      </div>
      <div>
        <label htmlFor="pros">
          Pros
          <textarea
            className="pros"
            placeholder="Share some pros of this bootcamp"
            name="pros"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.pros}
          />
        </label>
      </div>

      <div>
        <label htmlFor="cons">
          Cons
          <textarea
            className="cons"
            placeholder="Share some cons of this bootcamp"
            name="cons"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.cons}
          />
        </label>
      </div>

      <div>
        <label htmlFor="dateGraduated">
          Date of Graduation*
          <input
            className="dateGraduated"
            name="dateGraduated"
            type="date"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.dateGraduated}
          />
        </label>
        {formik.errors.dateGraduated && formik.touched.dateGraduated ? (
          <div>{formik.errors.dateGraduated}</div>
        ) : null}
      </div>

      <div>
        <label htmlFor="email">
          Email*
          <input
            className="email"
            placeholder="Your email"
            type="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
        </label>
        {formik.errors.email && formik.touched.email ? (
          <div>{formik.errors.email}</div>
        ) : null}
      </div>

      <div>
        <label htmlFor="acceptTerms" className="checkbox-label">
          <input
            className="acceptTerms"
            type="checkbox"
            name="acceptTerms"
            onChange={formik.handleChange}
          />
          I agree to BootcampAvenue Terms of Use. This review of my experience
          at this bootcamp is truthful*
        </label>

        {formik.errors.acceptTerms && formik.touched.acceptTerms ? (
          <div>{formik.errors.acceptTerms}</div>
        ) : null}
      </div>

      <div>
        <button
          type="submit"
          disabled={formik.isSubmitting}
          className="form-submit-btn"
        >
          Post Review
        </button>
      </div>
    </form>
  );
};

ReviewFormPage.propTypes = {
  match: PropTypes.object.isRequired,
};
export default withRouter(ReviewFormPage);

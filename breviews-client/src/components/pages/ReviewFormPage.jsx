// Render Prop
import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage, useFormik, setFieldValue } from "formik";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import Rating from "react-rating";
import "./style/reviewformpage.css";

class ReviewFormPage extends Component {
  render() {
    const { match } = this.props;
    let schoolName = match.params.name;

    return (
      <div className="review-form-container">
        <ReviewForm />
      </div>
    );
  }
}

function ReviewForm() {
  const formik = useFormik({
    initialValues: {
      customerName: "",
      dateGraduated: "",
      pros: "",
      cons: "",
      review: "",
      email: "",
      acceptTerms: false
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
    validate: values => {
      let errors = {};

      if (!values.customerName) {
        errors.customerName = "Required";
      }
      // if (!values.ratingValue) {
      //   errors.ratingValue = "Required";
      // }
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
      console.log("errors", errors);
      return errors;
    },
  });

  return (
      <form onSubmit={formik.handleSubmit} className="review-submit-form">
      <div>
        <label htmlFor="customerName">Name* </label>
        <input
          name="customerName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.customerName}
        />
        {formik.errors.customerName && formik.touched.customerName ? <div>{formik.errors.customerName}</div>: null}
      </div>

      {/* <div>
        <label htmlFor="email">Select rating* </label>
        <Rating
          className="star-rating-container"
          start={0}
          stop={5}
          initialRating={0}
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
      </div>
       */}
      <div>
        <label htmlFor="review">Your Review*
        <input
          name="review"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.review}
        />
        </label>
        {formik.errors.review && formik.touched.review ? <div>{formik.errors.review}</div>: null}
      </div>
      <div>
        <label htmlFor="pros">Pros
        <input
          name="pros"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.pros}
        />
        </label>
      </div>

      <div>
        <label htmlFor="cons">Cons
        <input
          name="cons"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.cons}
        />
        </label>
      </div>

      <div>
        <label htmlFor="dateGraduated">Date of Graduation*
        <input
          name="dateGraduated"
          type="date"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.dateGraduated}
        />
        </label>
        {formik.errors.dateGraduated && formik.touched.dateGraduated ? <div>{formik.errors.dateGraduated}</div>: null}

      </div>

      <div>
        <label htmlFor="email">Email
        <input
          type="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        </label>
        {formik.errors.email && formik.touched.email ? <div>{formik.errors.email}</div>: null}
      </div> 

      <div>
        <label>
            <input type="checkbox" name="acceptTerms" onChange={formik.handleChange}/>
            I agree to BootcampAvenue Terms of Use. This review of my experience
            at this bootcamp is truthful*
          </label> 
          {formik.errors.acceptTerms && formik.touched.acceptTerms ? <div>{formik.errors.acceptTerms}</div>: null}
      </div>
      <div>
        <button type="submit">Post Review</button>
      </div>

    </form>
  );
}

ReviewFormPage.propTypes = {
  match: PropTypes.object.isRequired,
};
export default withRouter(ReviewFormPage);





// {
/* <Field 
        className="overall-review-rating-stars"
        name="ratingStar"
        >
        <Rating
          className="star-rating-container"
          start={0}
          stop={5}
          initialRating={0}
          emptySymbol={<img id="rating-empty-star" src="../../public/assets/rating-off.png" />}
          fullSymbol={<img id="rating-full-star" src="../../public/assets/rating-on.png" />}
        />
      </Field> */
// }
// {
/* <ErrorMessage name="customerName" component="div" /> */
// }

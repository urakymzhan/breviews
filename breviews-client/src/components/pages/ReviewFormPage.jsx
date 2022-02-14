import React, { Component } from "react";
import { useField, Field, Formik, ErrorMessage, Form } from "formik";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import Rating from "react-rating";
import "./style/reviewformpage.scss";
import * as Yup from "yup";
import fullLogo from "../../../public/assets/full-circle.svg";
import emptyLogo from "../../../public/assets/empty-circle.svg";

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

// handle star rating
const MyStarInput = ({ ratingVal, handleStar, ...props }) => {
  // const [field, meta ] = useField(props);
  return (
    <Rating
      className="star-rating-container"
      start={0}
      stop={5}
      initialRating={ratingVal}
      onClick={handleStar}
      emptySymbol={<img id="rating-empty-star" src={emptyLogo} />}
      fullSymbol={<img id="rating-full-star" src={fullLogo} />}
    />
  );
};

class ReviewFormPage extends Component {
  state = {
    ratingVal: 0,
  };

  handleSubmit = (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);
    const { ratingVal } = this.state;
    values.star = ratingVal;
    delete values.acceptTerms;
    const today = new Date();
    values.date = today;
    // post here
    // repeated params code
    const { name } = this.props.match.params;
    fetch(`${process.env.API_URL}/bootcamps/${name}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(values),
    });

    setSubmitting(false);
    // reset
    resetForm();
    // reset star
    this.setState({ ratingVal: 0 });

    // redirect
    const { customName } = this.props.location.state;
    const location = {
      pathname: `/form-complete/${name}`,
      state: customName,
    };
    this.props.history.push(location);
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
    } else if (values.title.split(" ").length < 3) {
      errors.title = "Please write at least 3 words";
    }
    if (!values.review) {
      errors.review = "Required";
    } else if (values.review.split(" ").length < 15) {
      errors.review = "Please write at least 15 words";
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
    if (!values.linkedin) {
      errors.linkedin = "Required";
    } else if (values.linkedin.indexOf("linkedin") === -1) {
      errors.linkedin = "Invalid linkedin url";
    }
    return errors;
  };

  render() {
    // from results page
    const { customName } = this.props.location.state;
    return (
      <div className="review-form-container">
        <h3>{customName}</h3>
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
          ratingVal: ratingVal,
          linkedin: "",
        }}
        validate={validate}
        onSubmit={onSubmit}
      >
        {({ values, errors, isSubmitting }) => (
          <Form className="review-submit-form">
            <div>
              <label htmlFor="customerName">Name* </label>
              <Field placeholder="Name" name="customerName" type="input" />
              <ErrorMessage
                name="customerName"
                render={(msg) => <div className="form-errors">{msg}</div>}
              />
            </div>
            <div>
              <label>Select Rating*</label>
              <MyStarInput
                name="ratingVal"
                handleStar={handleStar}
                ratingVal={ratingVal}
                value={ratingVal}
              />
              <ErrorMessage
                name="ratingVal"
                render={(msg) => <div className="form-errors">{msg}</div>}
              />
            </div>
            <div>
              <label htmlFor="title"> Title of your review* </label>
              <Field
                placeholder="Best bootcamp, reccomend..."
                name="title"
                type="input"
              />
              <span className="input-footers">( 3 word minimum )</span>
              <ErrorMessage
                name="title"
                render={(msg) => <div className="form-errors">{msg}</div>}
              />
            </div>

            <div>
              <label htmlFor="review"> Your Review* </label>
              <Field
                className="review"
                name="review"
                type="textarea"
                component="textarea"
                rows={5}
                cols={20}
              />
              <span className="input-footers">( 15 word minimum )</span>
              <ErrorMessage
                name="review"
                render={(msg) => <div className="form-errors">{msg}</div>}
              />
            </div>
            <div>
              <label htmlFor="pros"> Pros </label>
              <Field
                className="pros"
                placeholder="Share some pros of this bootcamp"
                name="pros"
                type="textarea"
                component="textarea"
              />
            </div>
            <div>
              <label htmlFor="cons"> Cons </label>
              <Field
                className="cons"
                placeholder="Share some cons of this bootcamp"
                name="cons"
                type="textarea"
                component="textarea"
              />
            </div>
            <div>
              <label htmlFor="email"> Email* </label>
              <Field name="email" type="email" />
              <ErrorMessage
                name="email"
                render={(msg) => <div className="form-errors">{msg}</div>}
              />
            </div>
            <div>
              <label htmlFor="linkedin"> LinkedIn Url* </label>
              <Field name="linkedin" type="input" />
              <ErrorMessage
                name="linkedin"
                render={(msg) => <div className="form-errors">{msg}</div>}
              />
            </div>
            <div className="checkboxes">
              <Field name="acceptTerms" type="checkbox" className="checkbox" />
              <label className="checkbox-label">
                I agree to BootcampAvenue Terms of Use. This review of my
                experience at this bootcamp is truthful*
              </label>
              <ErrorMessage
                name="acceptTerms"
                render={(msg) => <div className="form-errors">{msg}</div>}
              />
            </div>
            <div>
              <button
                disabled={isSubmitting}
                type="submit"
                className="form-submit-btn"
              >
                Post Review
              </button>
              {/* for testing purposes only */}
              {/* <pre>{JSON.stringify(values, null, 2)}</pre>
            <pre>{JSON.stringify(errors, null, 2)}</pre> */}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default withRouter(ReviewFormPage);

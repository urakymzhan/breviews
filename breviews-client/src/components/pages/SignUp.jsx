import React, { Component } from "react";
import { useField, Field, Formik, ErrorMessage, Form } from "formik";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import "./style/reviewformpage.scss";
import AuthService from "../../services/auth.services";
// import * as Yup from "yup";

class SignUp extends Component {
  state = {
    authError: null,
  };

  handleSubmit = (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);

    AuthService.signup(values)
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem("token", res?.data?.token);
          localStorage.setItem("user_id", res?.data?.user_id);
          this.props.history.push("/profile");
        } else {
          this.setState({ authError: res.data.message });
          localStorage.removeItem("logged_in");
        }
      })
      .catch((error) => {
        console.log(error);
        this.setState({ authError: error.message });
      });

    setSubmitting(false);
    // reset
    resetForm();
  };

  validate = (values) => {
    let errors = {};

    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length < 6) {
      errors.password = "Length of password needs to be at least 6 characters";
    }
    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }
    return errors;
  };

  render() {
    return (
      <div className="review-form-container">
        {/* temporary fix */}
        {this.state.authError && (
          <p style={{ color: "red" }}>{this.state.authError}</p>
        )}
        <LoginForm onSubmit={this.handleSubmit} validate={this.validate} />
      </div>
    );
  }
}

const LoginForm = (props) => {
  const { onSubmit, validate } = props;
  return (
    <div>
      <Formik
        validateOnChange={true}
        initialValues={{
          email: "",
          password: "",
        }}
        validate={validate}
        onSubmit={onSubmit}
      >
        {({ values, errors, isSubmitting }) => (
          <Form className="review-submit-form">
            <div>
              <label htmlFor="email"> Email* </label>
              <Field name="email" type="email" />
              <ErrorMessage
                name="email"
                render={(msg) => <div className="form-errors">{msg}</div>}
              />
            </div>
            <div>
              <label htmlFor="password"> Password* </label>
              <Field name="password" type="password" />
              <ErrorMessage
                name="password"
                render={(msg) => <div className="form-errors">{msg}</div>}
              />
            </div>

            <div>
              <button
                disabled={isSubmitting}
                type="submit"
                className="form-submit-btn"
              >
                Sign Up
              </button>
            </div>
            <div>
              <h2>
                Already have an account? <a href="/login"> Login</a>
              </h2>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default withRouter(SignUp);

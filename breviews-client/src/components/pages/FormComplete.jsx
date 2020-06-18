import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import "./style/formcomplete.scss";
import { Helmet } from 'react-helmet';

const FormComplete = (props) => {
  const { match } = props;
  let schoolName = match.params.name;
  let customName = props.location.state;

  return (
    <div className="form-complete-content-wrapper">
      <Helmet>
        <title>Form Complete</title>
      </Helmet>
      <p>
        Your review for{" "}
        <span className="capitalized-schoolname"> {customName}</span> is now
        live!
      </p>
      <p>
        See your review <Link to={`/bootcamps/${schoolName}`}>here</Link>
      </p>
    </div>
  );
};
export default withRouter(FormComplete);

FormComplete.propTypes = {
  match: PropTypes.object.isRequired,
};

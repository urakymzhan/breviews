import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from "uuid";

function userFormValidation(initialtate, validate, addBootcampReview, name) {
  // multiple form handle
  const [values, setValues] = useState(initialtate);
  // handle starValue
  const[ratingValue, setRatingValue] = useState(0);
  // handle show/close of modal
  const [show, setShow ] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setSubmitting] = useState(false);

  useEffect(() => {
    const {review, customerName, pros, cons, dateGraduated, jobfound, customerLinkedin } = values;
    const date = new Date().toLocaleDateString("en-US");
    const reviewID = uuidv4();

    const dataToPost = {
      id: reviewID,
      customerName,
      date,
      pros,
      cons,
      dateGraduated,
      star: ratingValue,
      jobfound,
      review,
      customerLinkedin
    };

    if(isSubmitting) {
      console.log("isSubmitting",isSubmitting)
      console.log("errors",errors)
      const noErrors = Object.keys(errors).length === 0;
      if(noErrors) {
        // post in redux
        addBootcampReview(dataToPost, name);
        // TODO: async ? 
        setSubmitting(false);
      } else {
        setSubmitting(false);
        return;
      }
    }
  }, [errors])
  function handleChange(e) {
    let { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    })
  };

  function handleBlur() {
    const validationErrors = validate(values);
    setErrors(validationErrors)
  }
  function handleSubmit(e) {
    e.preventDefault();
    // validate and set errors
    const validationErrors = validate(values);
    setErrors(validationErrors)
    // disa
    setSubmitting(true);

    // TODO: reset ?

    // close modal
    handleClose();
  };

  function handleClose() {
    setShow(false);
  };

  function handleShow() {
    setShow(true);
  };
  function handleStar(starVal) {
    setRatingValue(starVal)
  }

  return { 
    handleChange, values, handleSubmit, show, 
    ratingValue, handleShow, handleStar, 
    handleClose, handleBlur, errors, isSubmitting 
  }
}

export default userFormValidation;
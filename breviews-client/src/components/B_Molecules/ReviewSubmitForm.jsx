import React, { useState } from "react";
import "../../style/bootcamp.css";
import { Modal }  from 'react-bootstrap';
import  Rating from 'react-rating';

export default function ReviewSubmitForm(props) {
  const {
    localData,
    handleChange,
    handleSubmit,
    name,
    show,
    handleClose,
    formInput,
    handleStar,
    ratingValue,
  } = props;

  return (
    <Modal
    show={show} 
    onHide={handleClose} 
    animation={false}
    >
    <Modal.Header closeButton>
    <Modal.Title> Review {localData[0].customName} </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <form className="leave-review-box" onSubmit={e => handleSubmit(e, name)} >
        <div>
          <div className="overall-review-rating-stars">
            <Rating
              className="star-rating-container"
              start={0}
              stop={5}
              initialRating={ratingValue}
              emptySymbol={<img id="rating-empty-star" src="../../public/assets/rating-off.png" />}
              fullSymbol={<img id="rating-full-star" src="../../public/assets/rating-on.png" />}
              onClick={handleStar}
            />
          </div>
          <div className="leave-review-warning">
            <p>We won't be showing names (anonymous)*</p>
          </div>
          <div className="leave-review-row1">
            <input
              className="modalName"
              name="customerName"
              type="text"
              value={formInput.customerName}
              placeholder="Name* "
              onChange={handleChange}
            />
            <input
              className="modalDateGraduated"
              name="dateGraduated"
              type="number"
              min="1900"
              max="2100"
              value={formInput.dateGraduated}
              placeholder="Date of graduation*"
              onChange={handleChange}
            />
          </div>
          <div className="leave-review-row2">
            <textarea
              className="modalPros"
              name="pros"
              type="text"
              placeholder="Pros"
              value={formInput.pros}
              onChange={handleChange}
            ></textarea>
            <textarea
              className="modalCons"
              name="cons"
              type="text"
              placeholder="Cons"
              value={formInput.cons}
              onChange={handleChange}
            ></textarea>
          </div>
          <div>
            <textarea
              className="modalReview"
              name="review"
              type="text"
              placeholder="Type review here ..."
              value={formInput.review}
              onChange={handleChange}
            ></textarea>
          </div>
          <div>
            <input
              className="modalLinkedin"
              name="customerLinkedin"
              type="text"
              value={formInput.customerLinkedin}
              placeholder="Linkedin profile* "
              onChange={handleChange}
            />
          </div>
          <div className="modalSixMonthJobfound">
            <label>Did you find a job after 6 month of graduation?</label>
            <select name="jobfound" value={formInput.jobfound} onChange={handleChange}>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="notyetgraduated" >Not yet graduated</option>
            </select>
          </div>
          <div>
            <input
              id="modalsubmitBtn"
              type="submit"
              value="POST"
            />
          </div>
        </div>
      </form>
    </Modal.Body>
  </Modal>
  );
}

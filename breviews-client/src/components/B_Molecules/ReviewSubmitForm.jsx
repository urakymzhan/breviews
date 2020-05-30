// import React, { useState } from "react";
// import { Modal }  from 'react-bootstrap';
// import  Rating from 'react-rating';

// export default function ReviewSubmitForm(props) {
//   const {
//     localData,
//     handleChange,
//     handleSubmit,
//     name,
//     show,
//     handleClose,
//     values,
//     handleStar,
//     ratingValue,
//     handleBlur,
//     errors,
//     isSubmitting
//   } = props;

//   return (
//     <Modal
//     show={show} 
//     onHide={handleClose} 
//     animation={false}
//     >
//     <Modal.Header closeButton>
//     <Modal.Title> Review {localData[0].customName} </Modal.Title>
//     </Modal.Header>
//     <Modal.Body>
//       <form className="leave-review-box" onSubmit={e => handleSubmit(e, name)} >
//         <div>
//           <div className="overall-review-rating-stars">
//             <Rating
//               className="star-rating-container"
//               start={0}
//               stop={5}
//               initialRating={ratingValue}
//               emptySymbol={<img id="rating-empty-star" src="../../public/assets/rating-off.png" />}
//               fullSymbol={<img id="rating-full-star" src="../../public/assets/rating-on.png" />}
//               onClick={handleStar}
//             />
//           </div>
//           <div className="leave-review-warning">
//             <p>We won't be showing names (anonymous)*</p>
//           </div>
//           <div className="leave-review-row1">
//             <input
//               className={errors.customerName ? 'modalName errors': 'modalName'}
//               name="customerName"
//               type="text"
//               value={values.customerName}
//               placeholder="Name* "
//               onChange={handleChange}
//               onBlur={handleBlur}
//             />
//             {errors.customerName && <p>{ errors.customerName} </p> }
//             <input
//               className="modalDateGraduated"
//               className={errors.dateGraduated ? 'modalDateGraduated errors': 'modalDateGraduated'}
//               name="dateGraduated"
//               type="number"
//               min="1900"
//               max="2100"
//               value={values.dateGraduated}
//               placeholder="Date of graduation*"
//               onChange={handleChange}
//               onBlur={handleBlur}
//             />
//             {errors.dateGraduated && <p>{ errors.dateGraduated} </p> }
//           </div>
//           <div className="leave-review-row2">
//             <textarea
//               className={errors.pros ? 'modalPros errors': 'modalPros'}
//               name="pros"
//               type="text"
//               placeholder="Pros"
//               value={values.pros}
//               onChange={handleChange}
//               onBlur={handleBlur}
//             ></textarea>
//              {errors.pros && <p>{ errors.pros} </p> }
//             <textarea
//               className={errors.cons ? 'modalCons errors': 'modalCons'}
//               name="cons"
//               type="text"
//               placeholder="Cons"
//               value={values.cons}
//               onChange={handleChange}
//               onBlur={handleBlur}
//             ></textarea>
//              {errors.cons && <p>{ errors.cons} </p> }
//           </div>
//           <div>
//             <textarea
//               className={errors.review ? 'modalReview errors': 'modalReview'}
//               name="review"
//               type="text"
//               placeholder="Type review here ..."
//               value={values.review}
//               onChange={handleChange}
//               onBlur={handleBlur}
//             ></textarea>
//              {errors.review && <p>{ errors.review} </p> }
//           </div>
//           <div>
//             <input
//               className={errors.customerLinkedin ? 'modalLinkedin errors': 'modalLinkedin'}
//               name="customerLinkedin"
//               type="text"
//               value={values.customerLinkedin}
//               placeholder="Linkedin profile* "
//               onChange={handleChange}
//               onBlur={handleBlur}
//             />
//           </div>
//           {errors.customerLinkedin && <p>{ errors.customerLinkedin} </p> }
//           <div className="modalSixMonthJobfound">
//             <label>Did you find a job after 6 month of graduation?</label>
//             <select name="jobfound" value={values.jobfound} onChange={handleChange}>
//               <option value="Yes">Yes</option>
//               <option value="No">No</option>
//               <option value="notyetgraduated" >Not yet graduated</option>
//             </select>
//           </div>
//           <div>
//             <button
//               id="modalsubmitBtn"
//               type="submit"
//               disabled={isSubmitting}
//             >
//               POST
//             </button>
//           </div>
//         </div>
//       </form>
//     </Modal.Body>
//   </Modal>
//   );
// }

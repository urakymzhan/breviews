import React, { Fragment } from "react";
import "../../style/style.css";
import "../../style/landing.css";
import { withRouter } from "react-router";
import ReviewSubmitForm from "../B_Molecules/ReviewSubmitForm.jsx";
import ReviewsBox from "../B_Molecules/ReviewsBox.jsx";
import SortReviews from "../A_Atoms/SortReviews.jsx";
import { EMPTY_REVIEW_TEXT } from "../constants/constants";
import makeCancelable from "makecancelable";
import { v4 as uuidv4 } from "uuid";
import { Button }  from 'react-bootstrap';
import Spinner from "../A_Atoms/Spinner";

class Bootcamp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      localData: [],
      dataToPost: {},
      review: "",
      customerName: "",
      pros: "",
      cons: "",
      star: 0,
      dateGraduated: null,
      jobfound: 'Yes',
      show: false,
      ratingValue: null,
    };
  }

  getDataFromApi = async name => {
    const response = await fetch(`/api/bootcamps/${name}`);
    const result = await response.json();
    return result;
  };
  componentDidMount() {
    const { name } = this.props.match.params;
    console.log(typeof name);

    this.cancelRequest = makeCancelable(this.getDataFromApi(name), data =>
      this.setState({
        localData: data
      })
    );
  }
  componentWillUnmount() {
    this.cancelRequest();
  }

  handleChange = e => {
    let target = e.target;
    let value = target.value;
    let name = target.name;
    // console.log(name, value)
    this.setState({ [name]: value });
  };

  handleSubmit = (e, name) => {
    e.preventDefault();
    const reviewInput = this.state.review;
    const customerNameInput = this.state.customerName;
    const prosInput = this.state.pros;
    const consInput = this.state.cons;
    const dateGraduatedInput = this.state.dateGraduated;
    const today = new Date().toLocaleDateString("en-US");
    const reviewID = uuidv4();
    const jobfoundInput = this.state.jobfound;
    const ratingValue = this.state.ratingValue;

    const dataToPost = {
      // providing id for each review
      id: reviewID,
      review: reviewInput,
      customerName: customerNameInput,
      date: today,
      pros: prosInput,
      cons: consInput,
      dateGraduated: dateGraduatedInput,
      star: ratingValue,
      jobfound: jobfoundInput
    };
    let localData = this.state.localData;
    // pushing new review obj to state
    localData[0].reviews.push(dataToPost);
    // params id from ?
    console.log(reviewInput, "runs");

    if (reviewInput.length > 0) {
      fetch(`/api/bootcamps/${name}`, {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(dataToPost)
      });
    }
    this.setState({
      localData: localData,
      review: "",
      customerName: "",
      pros: "",
      cons: "",
      dateGraduated: null,
      dataToPost: {},
      jobfound: "Yes",
      ratingValue: 0
    });

    // close modal
    this.handleClose();
  };

  handleShow = e => {
    this.setState({ show: true });
  };

  handleClose = e => {
    this.setState({ show: false });
  };

  handleStars = (starVal) => {
    // console.log(starVal);
    this.setState({ ratingValue: starVal })
  }
  render() {

    const {
      localData,
      review,
      pros,
      cons,
      dateGraduated,
      customerName,
      jobfound,
      show,
      ratingValue
    } = this.state;

    console.log("localData", localData);
    // params name
    const { name } = this.props.match.params;

    return (
      <Fragment>
        {localData.length === 0 ? (
          <Spinner />
        ): 
        (
          // <Fragment>
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
            <Button className="write-review-btn" variant="outline-light" onClick={this.handleShow} >
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
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              customerName={customerName}
              review={review}
              cons={cons}
              pros={pros}
              dateGraduated={dateGraduated}
              jobfound={jobfound}
              name={name}
              show={show}
              handleClose={this.handleClose}
              handleStars={this.handleStars}
              ratingValue={ratingValue}
        />
        </div>

        </div>
        )}
      </Fragment>
    )
  }
}

export default withRouter(Bootcamp);

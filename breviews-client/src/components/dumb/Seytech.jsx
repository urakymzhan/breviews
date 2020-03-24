import React from "react";
import Header from "../B_Molecules/Header.jsx";
import "../../style/style.css";
import { withRouter } from "react-router";
import ReviewSubmitForm from "../B_Molecules/ReviewSubmitForm.jsx";
import ReviewsBox from "../B_Molecules/ReviewsBox.jsx";
import SortReviews from "../A_Atoms/SortReviews.jsx";
import { EMPTY_REVIEW_TEXT } from "../constants/constants";
// import Select from 'react-select'; use this later
import makeCancelable from "makecancelable";

class Seytech extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      localData: [],
      dataToPost: {},
      review: "",
      name: "",
      pros: "",
      cons: "",
      dateGraduated: ""
    };
  }

  getDataFromApi = async () => {
    const response = await fetch("/api/bootcamps/reviewlist/1");
    const result = await response.json();
    return result;
  };
  componentDidMount() {
    this.cancelRequest = makeCancelable(this.getDataFromApi(), data =>
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
    // console.log(value);
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const reviewInput = this.state.review;
    const nameInput = this.state.name;
    const prosInput = this.state.pros;
    const consInput = this.state.cons;
    const dateGraduatedInput = this.state.dateGraduated;
    const today = new Date().toLocaleDateString("en-US");

    const dataToPost = {
      review: reviewInput,
      name: nameInput,
      date: today,
      pros: prosInput,
      cons: consInput,
      dateGraduated: dateGraduatedInput
    };
    let localData = this.state.localData;
    // pushing new object to whole data in state
    localData.push(dataToPost);
    // params id from ?
    console.log(reviewInput, "runs");

    if (reviewInput.length > 0) {
      fetch("/api/bootcamps/addreview/1", {
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
      name: "",
      pros: "",
      cons: "",
      dateGraduated: "",
      dataToPost: {}
    });
  };

  render() {
    const { localData, review, name, pros, cons, dateGraduated } = this.state;
    // console.log("localData", localData);
    return (
      <div className="reviews-page-wrapper">
        <Header />
        <div className="reviews-content-wrapper">
          <div className="reviews-header">
            <h2>
              SEYTECH SCHOOL <span id="reviews-header-span">REVIEWS</span>
            </h2>
          </div>
          <div className="write-review-btn">
            <span className="openmodal"> Write a review</span>
          </div>
          <SortReviews />

          {/*  REVIEWS START */}
          <div className="customer-reviews">
            {localData.length === 0 ? (
              <div>
                <h3 id="empty-review-text"> {EMPTY_REVIEW_TEXT} </h3>
              </div>
            ) : (
              <ReviewsBox reviewsData={localData} />
            )}
          </div>
          {/*  REVIEWS END */}
          <ReviewSubmitForm
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            name={name}
            review={review}
            cons={cons}
            pros={pros}
            dateGraduated={dateGraduated}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(Seytech);

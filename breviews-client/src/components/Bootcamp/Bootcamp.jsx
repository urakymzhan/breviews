import React, { Fragment } from "react";
import "../../style/style.css";
import { withRouter } from "react-router";
import ReviewSubmitForm from "../B_Molecules/ReviewSubmitForm.jsx";
import ReviewsBox from "../B_Molecules/ReviewsBox.jsx";
import SortReviews from "../A_Atoms/SortReviews.jsx";
import { EMPTY_REVIEW_TEXT } from "../constants/constants";
// import Select from 'react-select'; use this later
import makeCancelable from "makecancelable";
import { v4 as uuidv4 } from "uuid";

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
      dateGraduated: ""
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
    console.log(value);
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

    const dataToPost = {
      // provide id for each review
      id: reviewID,
      review: reviewInput,
      customerName: customerNameInput,
      date: today,
      pros: prosInput,
      cons: consInput,
      dateGraduated: dateGraduatedInput,
      // hardcoded right now
      star: 2
    };
    let localData = this.state.localData;
    // pushing new review obj to state
    localData.push(dataToPost);
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
      dateGraduated: "",
      dataToPost: {}
    });
  };

  render() {
    const {
      localData,
      review,
      pros,
      cons,
      dateGraduated,
      customerName
    } = this.state;
    // console.log("localData", localData);
    const { name } = this.props.match.params;
    return (
      <Fragment>
        <div className="reviews-content-wrapper">
          <div className="reviews-header">
            <h2>
              <span style={{ textTransform: "uppercase" }}>{name}</span>{" "}
              <span id="reviews-header-span">REVIEWS</span>
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
            customerName={customerName}
            review={review}
            cons={cons}
            pros={pros}
            dateGraduated={dateGraduated}
            name={name}
          />
        </div>
      </Fragment>
    );
  }
}

export default withRouter(Bootcamp);

import React from "react";
import Header from "../B_Molecules/Header.jsx";
import Footer from "../B_Molecules/Footer.jsx";
import "../../style/style.css";
import ReviewSubmitForm from "../B_Molecules/ReviewSubmitForm.jsx";
import ReviewsBox from "../B_Molecules/ReviewsBox.jsx";
import SortReviews from "../A_Atoms/SortReviews.jsx";
import { EMPTY_REVIEW_TEXT } from "../constants/constants";
import makeCancelable from "makecancelable";

class Cybertek extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      localData: []
    };
  }
  getDataFromApi = async () => {
    const response = await fetch("/api/bootcamps/reviewlist/2");
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

  render() {
    let { name, review, cons, pros, dateGraduated } = this.props;
    let { handleSubmit, handleChange } = this.props;
    const { localData } = this.state;

    return (
      <div className="reviews-page-wrapper">
        <Header />
        <div className="reviews-content-wrapper">
          <div>
            <h2>
              CYBERTEK <span id="reviews-header">REVIEWS</span>
            </h2>
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
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            name={name}
            review={review}
            cons={cons}
            pros={pros}
            dateGraduated={dateGraduated}
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Cybertek;

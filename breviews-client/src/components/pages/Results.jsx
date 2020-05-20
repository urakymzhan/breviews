import React, {useState, useEffect} from "react";
import "./style/landing.css";
import "./style/results.css";
import { Link } from "react-router-dom";
import { SearchBanner, Spinner } from '../A_Atoms';
import { connect, useSelector, useDispatch } from "react-redux";

const Results = () => {
  const mainpageData = useSelector(state => state.landing.mainpageData);
  console.log(mainpageData)

  let content = <Spinner />;

  if (true) {
    content = (
      <div>
          {mainpageData.map((bootcamp) => {
            return (
              <section className="bootcamp-section" key={bootcamp._id}>
                <div className='main-box'>
                  <div className="bootcamp-logo-wrapper">
                    <img src={bootcamp.logo} />
                  </div>
                  <div className="schoolnames-wrapper">
                    <h4 className="schoolnames">
                      {" "}
                      <Link to={`/bootcamps/${bootcamp.schoolname}`}>
                        {" "}
                        {bootcamp.customName}{" "}
                      </Link>{" "}
                    </h4>
                  </div>
                  <div className="review-overall">
                    <Ratings
                      classname="star-rating-container"
                      overall={bootcamp.overall}
                    />
                    <span className="total-review-count">
                      {bootcamp.reviewsCount} reviews
                    </span>
                  </div>
                  <div className="bootcamp-location location">
                    {
                      bootcamp.location.map((location, ind) => {
                        return <span key={ind} style={{marginRight: "3px"}}>{location}</span>
                      })
                    }
                  </div>
                </div>
              </section>
            );
          })}
      </div>
    );
  }
  console.log("result page props", props.location.state);
  console.log("autoCompleteOptions", autoCompleteOptions)

  return (
    <div className="main-wrapper">
      <SearchBanner
        autoCompleteOptions={autoCompleteOptions} 
      />
        {content}
    </div>
  );
}

export default withRouter(Results);

import React, { useState, useEffect } from "react";
import "./style/results.css";
import { withRouter, Link } from "react-router-dom";
import { SearchBanner, Spinner } from "../A_Atoms";
import { Ratings } from '../A_Atoms'
import axios from "axios";

const Results = (props) => {
  // const [autoCompleteOptions, setAutoCompleteOptions] = useState([]);
  // useEffect(() => {
  //   // topbootcamps
  //   // remotebootcamps
  //   // search input based results
  //   console.log("useEffect inside Results called");
  //   async function fetchData () {
  //     const result = await axios(
  //       '/api/autoCompleteNames',
  //     );
  //     setAutoCompleteOptions(result.data);
  //   }
  //   fetchData();
  // }, []);

  let [resultsData, setResultsData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // TODO: this api should be changed by category
      const result = await axios("/api/landing");
      setResultsData(result.data);
    }
    fetchData();
  }, []);

  // TODO: Just testing out search options
  const NameOptions = resultsData.map((school) => school.customName);

  // console.log("NameOptions", NameOptions);
  console.log("props", props.location.state.category);
  // console.log("resultsData", resultsData);

  // TODO: Just testing out
  if (props.location.state.category === "top") {
    resultsData = resultsData.filter((data) => data.overall > 4);
  }
  if (props.location.state.category === "remote") {
    resultsData = resultsData.filter((data) =>
      data.location.includes("Remote")
    );
  }

  console.log("resultsData", resultsData);

  let content = <Spinner />;

  if (resultsData && resultsData.length > 0) {
    content = (
<<<<<<< HEAD
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
=======
      <div className="results-content-wrapper">
        <div className="results-content-navbar">
          <div className="results-all-results">All Results</div>
          <div className="results-sortby">
            Sort by{" "}
            <select>
              <option> Top Rated </option>
              <option> Worst Rated </option>
              <option>  By Date </option>
            </select>
          </div>
        </div>

        {resultsData.map((results) => {
          return (
            <div className="results-bootcamp-wrapper" key={results._id}>
              <div className="results-bootcamp-logo">
                <img src={results.logo} alt="bootcamp logo"/>
              </div>
              <div className="results-bootcamp-info">
                <h4>{results.customName}</h4>
                <div className="results-bootcamp-info-ratings">
                  <Ratings 
                    classname="results-bootcamp-star"
                    overall={results.overall}
                  />
                  <p>{results.reviewsCount} reviews</p>
                </div>
                <p className="results-bootcamp-location">
                  <img src="https://cdn3.iconfinder.com/data/icons/linecons-free-vector-icons-pack/32/location-512.png" style={{height: "12px", width: "auto", marginRight: "3px", verticalAlign: "baseline"}}/>
                  { results.location.map((loc, ind) => { return <span key={ind}> {loc} </span>})}
                </p>
                <div className="results-bootcamp-dur-price">
                  <p className="results-duration">
                    <span>Duration:</span> {results.duration}
                  </p>
                  <p><span>Price:</span> {results.price}</p>
                </div>
              </div>

              <div className="results-bootcamp-addreview">
                <Link
                  to={{
                    pathname: `/write-review/${results.schoolname}`,
                  }}
                >
                  <button>Add a Review</button>
                </Link>
              </div>
            </div>
          );
        })}
>>>>>>> a7d0c427a2198d488b88de43d22d7bb8c021c52d
      </div>
    );
  }

  return (
    <div className="main-wrapper">
      <SearchBanner autoCompleteOptions={NameOptions} />
      {content}
    </div>
  );
};

export default withRouter(Results);

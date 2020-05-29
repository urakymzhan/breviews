import React, { useState, useEffect } from "react";
import "./style/results.css";
import { withRouter, Link } from "react-router-dom";
import { Spinner, AsyncExample } from "../A_Atoms";
import { Ratings } from '../A_Atoms'
import axios from "axios";

const Results = (props) => {

  let [resultsData, setResultsData] = useState([]);

  useEffect(() => {
    const { category } = props.location.state;
    async function fetchData() {
      // TODO: this api should be changed by category
      const result = await axios(`/api/results/${category}`);
      setResultsData(result.data);
    }
    fetchData();
  }, []);

  console.log("resultsData", resultsData);

  let content = <Spinner />;

  if (resultsData && resultsData.length > 0) {
    content = (
      <div className="results-content-wrapper">
        <div className="results-content-navbar">
          <div className="results-all-results">All Results</div>
          {/* TODO: just testing */}
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
      </div>
    );
  }

  return (
    <div className="main-wrapper">
      <AsyncExample />
      {content}
    </div>
  );
};

export default withRouter(Results);

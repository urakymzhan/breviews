import React, { useState, useEffect } from "react";
import "./style/results.scss";
import { withRouter, Link, useLocation } from "react-router-dom";
import { Spinner, Ratings, SkeletonResults } from "../A_Atoms";
import { SearchBanner } from "../B_Molecules";
import queryString from 'query-string'
// import axios from "axios";

const Results = (props) => {
  const [resultsData, setResultsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [sortVal, setSortValue] = useState("toprated");
  const loc = useLocation();
  const query = queryString.parse(loc.search).category;
  // const selectedTags = props.location.state.selectedTags;
  // const selectedOption = props.location.state.selectedOption;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError("");
      try {
        // POST
        const response = await fetch(`/api/results?search=${query}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            searchCriterias: props.location.state,
          }),
        });
        const resData = await response.json();

        if (!response.ok) {
          // makes sure to go catch block 
          throw new Error(resData.message);
        }
        setResultsData(resData);
      } catch (err) {
        // extra err message doesnt hurt
        setError(err.message || "Couldn't get data. Please try again.");
      }
      setIsLoading(false);
    };
    fetchData();
    // localStorage.setItem('tags', selectedTags);
    // localStorage.setItem('option', selectedOption);
  }, []);

  const handleSort = (e) => {
    setSortValue(e.target.value);
  };

  console.log("selectedTags and sO results", props.location.state);

  // client side sort
  if (sortVal === "toprated") {
    resultsData.sort((a, b) => b.overall - a.overall);
  } else if (sortVal === "leastrated") {
    resultsData.sort((a, b) => a.overall - b.overall);
  } else if (sortVal === "pricehigh") {
    resultsData.sort((a, b) => b.totalPrice - a.totalPrice);
  } else if (sortVal === "pricelow") {
    resultsData.sort((a, b) => a.totalPrice - b.totalPrice);
  }

  let content;
  if (error) {
    content = <div className="error">{error}</div>;
  } else if (isLoading) {
    content = <SkeletonResults />;
  } else if (resultsData.length === 0) {
    content = (
      <div className="error">
        No Results found! Please try with different keys.
      </div>
    );
  } else {
    content = (
      <>
        {resultsData.map((results) => {
          return (
            <div className="results-bootcamp-wrapper" key={results._id}>
              <div className="results-bootcamp-logo">
                <img src={results.logo} alt="bootcamp logo" />
              </div>
              <div className="results-bootcamp-info">
                <Link to={`/bootcamps/${results.schoolname}`}>
                  <h4>{results.customName}</h4>
                </Link>
                <div className="results-bootcamp-info-ratings">
                  <Ratings
                    classname="results-bootcamp-star"
                    overall={results.overall}
                  />
                  <p>{results.reviewsCount} reviews</p>
                </div>
                <p className="results-bootcamp-location">
                  <img
                    src="https://cdn3.iconfinder.com/data/icons/linecons-free-vector-icons-pack/32/location-512.png"
                    style={{
                      height: "12px",
                      width: "auto",
                      marginRight: "3px",
                      verticalAlign: "baseline",
                    }}
                  />
                  {results.location.map((loc, ind) => {
                    return <span key={ind}> {loc} </span>;
                  })}
                </p>
                <div className="results-bootcamp-dur-price">
                  <p className="results-duration">
                    <span>Duration:</span> {results.duration}
                  </p>
                  <p>
                    <span>Price:</span> {results.price}
                  </p>
                </div>
              </div>

              <div className="results-bootcamp-addreview">
                <Link
                  to={{
                    pathname: `/write-review/${results.schoolname}`,
                    state: { customName: results.customName },
                  }}
                >
                  <button>Add a Review</button>
                </Link>
              </div>
            </div>
          );
        })}
      </>
    );
  }

  return (
    <div className="results-main-wrapper">
      <SearchBanner />
      <div className="results-content-wrapper">
        <div className="results-content-navbar">
          <div className="results-all-results">All Results</div>
          <div className="results-sortby">
            Sort by{" "}
            <select
              className="sortby-results"
              value={sortVal}
              onChange={handleSort}
            >
              <option value="toprated"> Top Rated </option>
              <option value="leastrated"> Least Rated </option>
              <option value="pricehigh"> Price: High to Low </option>
              <option value="pricelow"> Price: Low to High </option>
            </select>
          </div>
        </div>
        {content}
      </div>
    </div>
  );
};

export default withRouter(Results);

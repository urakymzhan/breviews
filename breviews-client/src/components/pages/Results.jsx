import React, { useState, useEffect } from "react";
import "./style/results.scss";
import { withRouter, Link, useLocation } from "react-router-dom";
import { Ratings, SkeletonResults } from "../A_Atoms";
import { SearchBanner } from "../B_Molecules";
import queryString from "query-string";
import { Helmet } from "react-helmet";
import locationicon from "../../../public/assets/locationMini.png";

const Results = (props) => {
  const [resultsData, setResultsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  // to persist sorting localstorage is used
  const [sortVal, setSortValue] = useState(
    localStorage.getItem("sortVal") || "toprated"
  );
  const loc = useLocation();
  const query = queryString.parse(loc.search).category;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError("");
      try {
        // POST
        const response = await fetch(
          `${process.env.API_URL}/results?search=${query}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              searchCriterias: props.location.state,
            }),
          }
        );
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
    // important in updating Results on every change!!!
  }, [query, props.location.state]);

  const handleSort = (e) => {
    localStorage.setItem("sortVal", e.target.value);
    setSortValue(e.target.value);
  };

  // client side sort - temp solution
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
  } else if (!resultsData || resultsData.length === 0) {
    content = (
      <div className="error">
        No Results found! <br />
        Please try with different keys.
      </div>
    );
  } else {
    content = (
      <>
        <Helmet>
          <title>Results</title>
        </Helmet>
        {resultsData.map((results) => {
          return (
            <div className="results-bootcamp-wrapper" key={results._id}>
              <figure className="results-bootcamp-logo">
                <div className="logo-fke-brder">
                  <img src={results.logo} alt="bootcamp logo" />
                </div>
              </figure>
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
                  <img src={locationicon} />
                  {results.location.map((loc, ind) => {
                    return <span key={ind}> {loc} </span>;
                  })}
                </p>
                <div className="results-bootcamp-dur-price">
                  <p className="results-duration">
                    <span style={{ fontWeight: "900" }}>Duration:</span>{" "}
                    {results.duration}
                  </p>
                  <p>
                    <span style={{ fontWeight: "900" }}>Price:</span>{" "}
                    {results.price}
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

import React, { useState, useEffect } from "react";
import "./style/results.scss";
import { withRouter, Link } from "react-router-dom";
import { Spinner, Ratings } from "../A_Atoms";
import { SearchBanner } from "../B_Molecules";
import axios from "axios";

const Results = (props) => {
  let [resultsData, setResultsData] = useState([]);
  let [isLoading, setIsLoading] = useState(false);
  let [noData, setNoData] = useState("");

  useEffect(() => {
    const { search } = props.match.params;
    async function fetchData() {
      // POST
      await axios({
        method: "POST",
        url: `/api/results/${search}`,
        headers: { "Content-Type": "application/json" },
        data: { searchCriterias: props.location.state },
      }).then(
        (response) => {
          // setIsLoading(true);
          if (!response.data.length) {
            setNoData({ noData: "No results found. Try different keywords" });
          } else {
            console.log("response", response);
            setResultsData(response.data);
            setNoData({ noData: '' });
            setIsLoading(false);  
          }
        },
        (error) => {
          console.log(error);
        }
      );
    }
    fetchData();
  }, []);

  console.log("selectedTags and selectedOtion from results", props.location.state);
  
  let content = <Spinner />;

  if (resultsData.length === 0) {
    content = <div>{ noData.noData }</div>
  }
  if (!isLoading && resultsData && resultsData.length > 0) {
    content = (
      <>
        {resultsData.map((results) => {
          return (
            <div className="results-bootcamp-wrapper" key={results._id}>
              <div className="results-bootcamp-logo">
                <img src={results.logo} alt="bootcamp logo" />
              </div>
              <div className="results-bootcamp-info">
                <Link to={`/bootcamps/${results.schoolname}`}><h4>{results.customName}</h4></Link>
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
                    state: { customName: results.customName }
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
    <div className="main-wrapper">
      <SearchBanner />
      <div className="results-content-wrapper">
        <div className="results-content-navbar">
          <div className="results-all-results">All Results</div>
          {/* TODO: just testing */}
          <div className="results-sortby">
            Sort by{" "}
            <select>
              <option> Top Rated </option>
              <option> Worst Rated </option>
              <option> By Date </option>
            </select>
          </div>
        </div>
        {content}
      </div>
    </div>
  );
};

export default withRouter(Results);

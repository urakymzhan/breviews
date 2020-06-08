import React, { Fragment, useEffect, useState } from "react";
import "./style/bootcamp.scss";
import { withRouter } from "react-router";
import { ReviewsBox } from "../B_Molecules";
import { SortReviews, Spinner } from "../A_Atoms";
import { EMPTY_REVIEW_TEXT } from "../../utils/constants";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { getBootcampData } from "../../redux/actions/bootcamp";
import { Link } from "react-router-dom";
import { Ratings } from "../A_Atoms";
// import ReactPaginate from "react-paginate";
import Pagination from "react-js-pagination";

const Bootcamp = (props) => {
  const localData = useSelector((state) => state.bootcamp.localData);
  const dispatch = useDispatch();
  const name = props.match.params.name;

  const [offset, setOffset] = useState(5);
  const [activePage, setActivePage] = useState(1);

  const [sortVal, setSortValue] = useState("newest");

  useEffect(() => {
    dispatch(getBootcampData(name));
  }, []);

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  const handleSort = (e) => {
    setSortValue(e.target.value);
  };

  console.log("localData from Bootcamp", localData);
  console.log("sortVal", sortVal);

  // start and end for pagination
  const start = (activePage - 1) * offset;
  const end = activePage * offset;

  // client side sort
  if (sortVal === "newest" && localData && localData.length > 0) {
    localData[0].reviews = localData[0].reviews.sort((a, b) =>
      new Date(a.date) < new Date(b.date) ? 1 : -1
    );
  } else if (sortVal === "oldest" && localData && localData.length > 0) {
    localData[0].reviews = localData[0].reviews.sort((a, b) =>
      new Date(a.date) > new Date(b.date) ? 1 : -1
    );
  } else if (sortVal === "highestrating") {
    localData[0].reviews = localData[0].reviews.sort((a, b) => b.star - a.star);
  } else if (sortVal === "lowestrating") {
    localData[0].reviews = localData[0].reviews.sort((a, b) => a.star - b.star);
  }
  return (
    <Fragment>
      {localData && localData.length === 0 ? (
        <Spinner />
      ) : (
        <div className="reviews-content-wrapper">
          <div className="bootcamps-header">
            <div className="bootcamps-header-container">
              <div className="logo-wraper">
                <div className="bootcamp-logo">
                  <div className="logo-fke-brder">
                    <img src={localData[0].logo} alt="company logo" />
                  </div>
                </div>
              </div>

              <div className="bootcamp-info">
                <div className="bootcamp-info-row0">
                  <h3>
                    {localData[0].customName}{" "}
                    <a href={localData[0].website} target="_blank">
                      <img src="https://cdn1.iconfinder.com/data/icons/feather-2/24/external-link-512.png" />
                    </a>
                  </h3>
                </div>
                <div className="bootcamp-info-row1">
                  <Ratings
                    classname="star-rating-container"
                    overall={localData[0].overall}
                  />
                  <p className="total-reviews-cnt">
                    {localData[0].reviewsCount} reviews
                  </p>
                  <p>
                    <img
                      src="https://cdn3.iconfinder.com/data/icons/linecons-free-vector-icons-pack/32/location-512.png"
                      style={{
                        height: "12px",
                        width: "auto",
                        marginRight: "5px",
                        verticalAlign: "baseline",
                      }}
                    />
                    {localData[0].location.map((loc, ind) => (
                      <span key={ind} className="location">
                        {" "}
                        {loc}{" "}
                      </span>
                    ))}
                  </p>
                </div>
                <div className="bootcamp-info-row2">
                  {localData[0].tags &&
                    localData[0].tags.map((tag, i) => {
                      return (
                        <button key={i} className="row2-tags">
                          {tag}
                        </button>
                      );
                    })}
                </div>
                <div className="bootcamp-info-row3">
                  <p>
                    <span>Duration: </span> {localData[0].duration}
                  </p>
                  <p>
                    <span>Price: </span> {localData[0].price}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="reviews-main">
            <div className="aside-wrapper">
            <div className="reviews-progress-bars">
                    <p>Will Fill Out Later</p>
              </div>
              <div className="bootcamp-write-a-review">
                <h6>Write a Review</h6>
                <p>Have you completed {localData[0].customName}?</p>
                <p>
                  Submit a review and tell us about your experience?
                </p>
                <p>
                  We may take down any review that we think is fake or that
                  doesn’t follow our
                  <Link to="/legal"> review policies</Link>.
                </p>
                <Link
                  to={{
                    pathname: `/write-review/${localData[0].schoolname}`,
                    state: { customName: localData[0].customName },
                  }}
                >
                  <button>Review</button>
                </Link>
              </div>
            </div>

            <div className="reviews-content">
              <div className="customer-reviews">
                              {/* <SortReviews /> */}
              <div className="srt-div">
                <span>Sort by: </span>
                <select
                  className="sortby-reviews"
                  value={sortVal}
                  onChange={handleSort}
                >
                  <option value="newest">Newest</option>
                  <option value="oldest">Oldest</option>
                  <option value="highestrating">Highest rating</option>
                  <option value="lowestrating">Lowest rating</option>
                </select>
              </div>
                <div>
                  {localData[0].reviews.length === 0 ? (
                    <div>
                      <p id="empty-review-text"> {EMPTY_REVIEW_TEXT} </p>
                    </div>
                  ) : (
                    <ReviewsBox
                      reviewsData={localData[0].reviews.slice(start, end)}
                    />
                  )}
                  <Pagination
                    hideFirstLastPages
                    pageRangeDisplayed={5}
                    activePage={activePage}
                    itemsCountPerPage={offset}
                    totalItemsCount={localData[0].reviews.length}
                    onChange={handlePageChange}
                    itemClass="page-item"
                    linkClass="page-link"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

Bootcamp.protoType = {
  localData: PropTypes.array.isRequired,
  getBootcampData: PropTypes.func.isRequired,
};

export default withRouter(Bootcamp);

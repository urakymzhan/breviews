import React, { Fragment, useEffect, useState } from "react";
import "./style/bootcamp.scss";
import { withRouter } from "react-router";
import { ReviewsBox } from "../B_Molecules";
import { SortReviews, Spinner } from "../A_Atoms";
import { EMPTY_REVIEW_TEXT } from "../../utils/constants";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Ratings } from "../A_Atoms";
import ProgressBar from "react-bootstrap/ProgressBar";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import { Helmet } from "react-helmet";
import locationicon from "../../../public/assets/locationMini.png";
import externallink from "../../../public/assets/external-link.svg";

// optional remove this if needed
const useStyles = makeStyles((theme) => ({
  root: {
    "& > * + *": {
      marginTop: theme.spacing(4),
    },
  },
}));

const Bootcamp = (props) => {
  // removed redux for now

  const name = props.match.params.name;
  const [localData, setLocalData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const [offset, setOffset] = useState(5);
  const [sortVal, setSortValue] = useState("newest");

  const classes = useStyles();
  const [page, setPage] = useState(1);

  useEffect(() => {
    // was clear before, its break users auth
    localStorage.removeItem("sortVal"); 
    const fetchData = async () => {
      setIsLoading(true);
      setError("");
      try {
        const response = await fetch(
          `${process.env.API_URL}/bootcamps/${name}`,
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          }
        );
        const resData = await response.json();
        if (!response.ok) {
          // make sure to go to catch block if any server error
          throw new Error(resData.message);
        }
        setLocalData(resData);
      } catch (err) {
        // fallback message doesn't hurt
        setError(err.message || "Couldn't get data. Please try again.");
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const handleSort = (e) => {
    setSortValue(e.target.value);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  let content;
  if (error) {
    content = <div>{error}</div>;
  } else if (isLoading || localData.length === 0) {
    content = <Spinner />;
  } else {
    let {
      customName,
      duration,
      location,
      logo,
      overall,
      price,
      reviews,
      reviewsCount,
      schoolname,
      tags,
      website,
    } = localData[0];

    // TODO: client side sort - not ideal
    if (sortVal === "newest") {
      reviews = reviews.sort((a, b) =>
        new Date(a.date) < new Date(b.date) ? 1 : -1
      );
    } else if (sortVal === "oldest") {
      reviews = reviews.sort((a, b) =>
        new Date(a.date) > new Date(b.date) ? 1 : -1
      );
    } else if (sortVal === "highestrating") {
      reviews = reviews.sort((a, b) => b.star - a.star);
    } else if (sortVal === "lowestrating") {
      reviews = reviews.sort((a, b) => a.star - b.star);
    }
    // TODO: client side filter - not ideal
    const progresFive = reviews.filter((review) => review.star === 5).length;
    const progresFour = reviews.filter((review) => review.star === 4).length;
    const progresThree = reviews.filter((review) => review.star === 3).length;
    const progresTwo = reviews.filter((review) => review.star === 2).length;
    const progresOne = reviews.filter((review) => review.star === 1).length;

    // pagination data
    const start = (page - 1) * offset;
    const end = page * offset;
    const count = Math.ceil(reviews.length / offset);

    content = (
      <div className="reviews-content-wrapper">
        <Helmet>
          <title>Bootcamp</title>
        </Helmet>
        <div className="bootcamps-header">
          <div className="bootcamps-header-container">
            <div className="logo-wraper">
              <div className="bootcamp-logo">
                <div className="logo-fke-brder">
                  <img src={logo} alt="company logo" />
                </div>
              </div>
            </div>

            <div className="bootcamp-info">
              <div className="bootcamp-info-row0">
                <h3>
                  {customName}{" "}
                  <a href={website} target="_blank">
                    <img src={externallink} alt="external website link" />
                  </a>
                </h3>
              </div>
              <div className="bootcamp-info-row1">
                <Ratings classname="star-rating-container" overall={overall} />
                <p className="total-reviews-cnt">{reviewsCount} reviews</p>
                <p>
                  <img src={locationicon} alt="bootcamp location" />
                  {location.map((loc, ind) => (
                    <span key={ind} className="location">
                      {" "}
                      {loc}{" "}
                    </span>
                  ))}
                </p>
              </div>
              <div className="bootcamp-info-row2">
                {tags &&
                  tags.map((tag, i) => {
                    return (
                      <button key={i} className="row2-tags">
                        {tag}
                      </button>
                    );
                  })}
              </div>
              <div className="bootcamp-info-row3">
                <p>
                  <span>Duration: </span> {duration}
                </p>
                <p>
                  <span>Price: </span> {price}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="reviews-main">
          <div className="aside-wrapper">
            <div className="reviews-progress-bars">
              <div className="progressbar-grid">
                <div>
                  <Ratings classname="star-rating-container" overall={5} />
                </div>
                <div className="rating-numbers">({progresFive})</div>
                <ProgressBar max={reviews.length} now={progresFive} />
              </div>

              <div className="progressbar-grid">
                <div>
                  <Ratings classname="star-rating-container" overall={4} />
                </div>
                <div className="rating-numbers">({progresFour})</div>
                <ProgressBar max={reviews.length} now={progresFour} />
              </div>

              <div className="progressbar-grid">
                <div>
                  <Ratings classname="star-rating-container" overall={3} />
                </div>
                <div className="rating-numbers">({progresThree})</div>
                <ProgressBar max={reviews.length} now={progresThree} />
              </div>

              <div className="progressbar-grid">
                <div>
                  <Ratings classname="star-rating-container" overall={2} />
                </div>
                <div className="rating-numbers">({progresTwo})</div>
                <ProgressBar max={reviews.length} now={progresTwo} />
              </div>

              <div className="progressbar-grid">
                <div>
                  <Ratings classname="star-rating-container" overall={1} />
                </div>
                <div className="rating-numbers">({progresOne})</div>
                <ProgressBar max={reviews.length} now={progresOne} />
              </div>
            </div>
            <div className="bootcamp-write-a-review">
              <h6>Write a Review</h6>
              <p>Have you completed {customName}?</p>
              <p>Submit a review and tell us about your experience?</p>
              <p>
                Please follow our
                <Link to="/legal"> review policies</Link>.
              </p>
              <Link
                to={{
                  pathname: `/write-review/${schoolname}`,
                  state: { customName: customName },
                }}
              >
                <button>Review</button>
              </Link>
            </div>
          </div>

          <div className="reviews-content">
            <div className="review-warning">
              <p>
                Can't see your review? <br />
                Please check your email to learn why we evaluated it as a spam.
              </p>
            </div>
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
                {reviews.length === 0 ? (
                  <div className="empty-review-text">
                    <p> {EMPTY_REVIEW_TEXT} </p>
                  </div>
                ) : (
                  <ReviewsBox reviewsData={reviews.slice(start, end)} />
                )}
                <div className={classes.root}>
                  <Pagination
                    count={count}
                    page={page}
                    onChange={handlePageChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <Fragment>{content}</Fragment>;
};

Bootcamp.protoType = {
  localData: PropTypes.array.isRequired,
  getBootcampData: PropTypes.func.isRequired,
};

export default withRouter(Bootcamp);

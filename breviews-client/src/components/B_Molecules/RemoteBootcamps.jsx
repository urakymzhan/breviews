import React from "react";
import { Link } from "react-router-dom";
import "./style/remotebootcamps.css";
import { Ratings } from "../A_Atoms";

const RemoteBootcamps = ({ remoteBootcamps }) => {
  let content = remoteBootcamps.map((bootcamp) => {
    return (
      <div className="bootcamp-section" key={bootcamp._id}>
        <div>
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
            <img
              src="https://cdn3.iconfinder.com/data/icons/linecons-free-vector-icons-pack/32/location-512.png"
              style={{
                height: "12px",
                width: "auto",
                marginRight: "3px",
                verticalAlign: "baseline",
              }}
            />
            {bootcamp.location.map((location, ind) => {
              return (
                <span key={ind} style={{ marginRight: "3px" }}>
                  {location}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    );
  });

  return (
    <section>
      <div className="remote-bootcamps-nav">
        <h4>Remote Bootcamps</h4>
        <Link to={`/results`}>See all</Link>
      </div>
      <div className="remote-bootcamps-list-row">{content}</div>
    </section>
  );
};

export default RemoteBootcamps;

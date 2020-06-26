import React from "react";
import { Link } from "react-router-dom";
import "./style/remotebootcamps.scss";
import { Ratings } from "../A_Atoms";
import locationicon from '../../../public/assets/locationMini.png';

const RemoteBootcamps = ({ remoteBootcamps }) => {
  let content = remoteBootcamps.map((bootcamp) => {
    return (
      <div className="bootcamp-section" key={bootcamp._id}>
        <div>
          <figure className="bootcamp-logo-wrapper">
            <div className="logo-fke-brder">
              <img src={bootcamp.logo} />
            </div>
          </figure>

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
          <img src={locationicon} alt="location icons"/>
            {bootcamp.location.map((location, ind) => {
              return (
                <span key={ind}>
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
        <h3>Remote Bootcamps</h3>
        <Link
          to={{
            pathname: "/results",
            search: "?category=remote",
          }}
        >
          See all
        </Link>
      </div>
      <div className="remote-bootcamps-list-row">{content}</div>
    </section>
  );
};

export default RemoteBootcamps;

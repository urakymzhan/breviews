
import React from 'react'
// import Rating from "react-rating";
import { Link } from "react-router-dom";
import './style/topbootcamps.css'
import { Ratings } from '../A_Atoms';

const TopBootcamps = ({topBootcamps}) => {
    return (
        <div>
            <div className="top-bootcamps-nav">
            <h4>Top Bootcamps</h4>
            <p>See all</p>
            </div>
            <div className="top-bootcamps-list-row">
          {topBootcamps.map((bootcamp) => {
            return (
              <section className="bootcamp-section" key={bootcamp._id}>
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
        </div>
    )
}

export default TopBootcamps;
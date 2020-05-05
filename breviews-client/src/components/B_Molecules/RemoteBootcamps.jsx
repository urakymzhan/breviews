
import React from 'react';
import Rating from "react-rating";
import { Link } from "react-router-dom";
import './style/remotebootcamps.css';

const RemoteBootcamps = ({ remoteBootcamps }) => {
    return (
        <div>
            <div className="top-bootcamps-nav">
            <h4>Remote Bootcamps</h4>
            <p>See all</p>
            </div>
            <div className="top-bootcamps-list-row">
            {remoteBootcamps.map((bootcamp) => {
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
                        <Rating
                        className="star-rating-container"
                        start={0}
                        stop={5}
                        fractions={2}
                        placeholderRating={bootcamp.overall}
                        emptySymbol={
                            <img
                            id="rating-empty-star-main"
                            src="../../public/assets/rating-off.png"
                            />
                        }
                        placeholderSymbol={
                            <img
                            id="rating-full-star-main"
                            src="../../public/assets/rating-on.png"
                            />
                        }
                        readonly
                        />
                        <span className="total-review-count">
                        {bootcamp.reviewsCount} reviews
                        </span>
                    </div>
                    <div className="bootcamp-location location">
                        {/* TODO: this should be an array */}
                        <span>{bootcamp.location}</span>
                    </div>
                    </div>
                </section>
                );
            })}
            </div> 
        </div>
    )
}

export default RemoteBootcamps;
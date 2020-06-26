
import React from 'react'
import { Link } from "react-router-dom";
import './style/topbootcamps.scss'
import { Ratings, SkeletonResults } from '../A_Atoms';
import locationicon from '../../../public/assets/locationMini.png';

const TopBootcamps = ({topBootcamps}) => {

  let content;
  // if(topBootcamps.length === 0) {
  //   content = (
  //     <SkeletonResults />
  //   )
  // }
  content = topBootcamps.map((bootcamp) => {
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
          
          <div className="bootcamp-location">
              <img src={locationicon} alt="location icons"/>
            {
              bootcamp.location.map((location, ind) => {
                return <span key={ind}>{location}</span>
              })
            }
          </div>
       
        </div>
      
      </div>
    );
  })

    return (
        <section>
          <div className="top-bootcamps-nav">
            <h3>Top Bootcamps</h3>
            <Link
              to={{
                pathname: '/results',
                search: "?category=top"
              }}
            >
              See all
            </Link>
          </div>
          
          <div className="top-bootcamps-list-row">
          {content}
          </div> 
        </section>
    )
}

export default TopBootcamps;
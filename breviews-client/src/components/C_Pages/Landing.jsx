import React, { useEffect } from "react";
import "../../style/landing.css";
import { Link } from "react-router-dom";
import { Banner, Spinner } from '../../components/A_Atoms';
import { Chart } from "../B_Molecules";
import  Rating from 'react-rating';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getMainPageData } from '../../redux/actions/landing';

const Landing = ({ mainpageData, isLoaded, getMainPageData }) => {

  useEffect(() => {
    getMainPageData();
  }, [])

  let content = <Spinner />;
  console.log("mainpageData: ", mainpageData);

  if (isLoaded) {
    content = (
      <div className="bootcamps-list-row">
          {mainpageData.map(bootcamp => {
          return (
            <section className="bootcamp-section" key={bootcamp._id}>
              <div className="review-logo-header">
                <div className="bootcamp-logo-wrapper">
                  <img src={bootcamp.logo} />
                </div>
                <div className="schoolnames-wrapper">
                  <h4 className="schoolnames">
                    {" "}
                    <a href={bootcamp.website} target="_blank">
                      {" "}
                      {bootcamp.customName}{" "}
                    </a>{" "}
                  </h4>
                </div>
                <div className="review-overall">
                <Rating
                  className="star-rating-container"
                  start={0}
                  stop={5}
                  fractions={2}
                  placeholderRating={bootcamp.overall}
                  emptySymbol={<img id="rating-empty-star-main" src="../../public/assets/rating-off.png" />}
                  placeholderSymbol={<img id="rating-full-star-main" src="../../public/assets/rating-on.png" />}
                  readonly
                />
                  <div>
                    <span>{bootcamp.overall}/5 ({bootcamp.reviewsCount} reviews)</span>
                  </div>
                </div>
              </div>
              <div className="company-definition-wrapper">
                <div className="bootcamp-definition-text">
                  <p>{bootcamp.definition} </p>
                </div>           
              </div>
              <div className="more-reviews-wrapper" >
                  <button className="more-reviews">
                    <Link to={`/bootcamps/${bootcamp.schoolname}`}>
                      LEARN MORE
                    </Link>
                  </button>
              </div> 
            </section>
          );
        })}
      </div>
    );
  }
  return (
    <div className="main-wrapper">
      <Banner />
        {content}
      <Chart mainpageData={mainpageData}/>
      {/* <Footer /> */}
    </div>
  );
}

Landing.propTypes = {
  getMainPageData: PropTypes.func.isRequired,
  mainpageData: PropTypes.array.isRequired,
  isLoaded: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
  mainpageData: state.landing.mainpageData,
  isLoaded: state.landing.isLoaded
})
export default connect(mapStateToProps, { getMainPageData } )(Landing);



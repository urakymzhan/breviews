import React, { useEffect } from "react";
import "./style/landing.css";
import { Link } from "react-router-dom";
import { SearchBanner, Spinner } from "../A_Atoms";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getMainPageData } from "../../redux/actions/landing";
import { TopBootcamps, RemoteBootcamps } from '../B_Molecules';


const Landing = ({ mainpageData, isLoaded, getMainPageData }) => {
  useEffect(() => {
    getMainPageData();
  }, []);

  let content = <Spinner />;
  console.log("mainpageData: ", mainpageData);
  // will show only 4 bootcamps in main page
  const topBootcamps = mainpageData.slice(0, 4);
  const remoteBootcamps = mainpageData.slice(0, 4);

  if (isLoaded) {
    content = (
      <div className="container-bootcamps">
        <TopBootcamps topBootcamps={topBootcamps}/>
        <RemoteBootcamps remoteBootcamps={remoteBootcamps}/>
      </div>
    );
  }
  return (
    <div className="main-wrapper">
      <SearchBanner />
      {content}
    </div>
  );
};

Landing.propTypes = {
  getMainPageData: PropTypes.func.isRequired,
  mainpageData: PropTypes.array.isRequired,
  isLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  mainpageData: state.landing.mainpageData,
  isLoaded: state.landing.isLoaded,
});
export default connect(mapStateToProps, { getMainPageData })(Landing);

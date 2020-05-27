import React, { useEffect } from "react";
import "./style/landing.scss";
import { SearchBanner, Spinner } from "../A_Atoms";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { getMainPageData } from "../../redux/actions/landing";
import { TopBootcamps, RemoteBootcamps } from '../B_Molecules';


const Landing = () => {
  const isLoaded = useSelector(state => state.landing.isLoaded);
  const mainpageData = useSelector(state => state.landing.mainpageData);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("useEffect inside Landing called")
    dispatch(getMainPageData());
  }, []);

  let content = <Spinner />;
  // testing out 
  // its ok to filter here because we don't have much data 
  let topBootcamps = mainpageData.filter(bootcamp => bootcamp.overall > 4);
  let remoteBootcamps = mainpageData.filter(bootcamp => bootcamp.location.includes("Remote")) 
  // will show only 4 bootcamps in main page
  topBootcamps = topBootcamps.slice(0, 4);
  remoteBootcamps = remoteBootcamps.slice(0, 4);

  console.log("mainpageData", mainpageData);
  console.log("topBootcamps", topBootcamps)
  console.log("remoteBootcamps", remoteBootcamps)

  // testing out search options
  const NameOptions = mainpageData.map(school => school.customName);
  console.log("NameOptions", NameOptions)

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
       <SearchBanner
        autoCompleteOptions={NameOptions} 
       />
      {content}
    </div>
  );
};

export default Landing;
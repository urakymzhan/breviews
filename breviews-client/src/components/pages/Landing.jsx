import React, { useEffect } from "react";
import "./style/landing.scss";
import { Spinner } from "../A_Atoms";
import { TopBootcamps, RemoteBootcamps, SearchBanner } from '../B_Molecules';
import { useSelector, useDispatch } from "react-redux";
import { getMainPageData } from "../../redux/actions/landing";



const Landing = () => {
  const isLoaded = useSelector(state => state.landing.isLoaded);
  const mainpageData = useSelector(state => state.landing.mainpageData);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("test: useEffect in Landing called")
    dispatch(getMainPageData());
  }, []);

  let content = <Spinner />;
  // its ok to filter here, we don't have too much data 
  let topBootcamps = mainpageData.filter(bootcamp => bootcamp.overall > 4);
  let remoteBootcamps = mainpageData.filter(bootcamp => bootcamp.location.includes("Remote")) 
  // will show only max of 4 bootcamps in main page
  topBootcamps = topBootcamps.slice(0, 4);
  remoteBootcamps = remoteBootcamps.slice(0, 4);

  console.log("mainpageData", mainpageData);

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

export default Landing;
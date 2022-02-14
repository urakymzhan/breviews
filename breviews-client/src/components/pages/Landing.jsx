import React, { useEffect, useState } from "react";
import "./style/landing.scss";
import { SkeletonLanding } from "../A_Atoms";
import { TopBootcamps, RemoteBootcamps, SearchBanner } from "../B_Molecules";
import { Helmet } from "react-helmet";

const Landing = () => {
  // removed redux
  const [mainpageData, setMainpageData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  // console.log(`${process.env.API_URL}/landing`);

  useEffect(() => {
    // was clear before, its break users auth
    localStorage.removeItem("sortVal");
    const fetchData = async () => {
      setIsLoading(true);
      setError("");
      try {
        const response = await fetch(`${process.env.API_URL}/landing`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        const resData = await response.json();
        if (!response.ok) {
          // make sure to go to catch block if any server error
          throw new Error(resData.message);
        }
        setMainpageData(resData);
      } catch (err) {
        // fallback message doesnt hurt
        setError(err.message || "Couldn't get data. Please try again.");
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  let content;
  if (error) {
    content = <div>{error}</div>;
  } else if (isLoading || mainpageData.length === 0) {
    content = <SkeletonLanding />;
  } else {
    content = (
      <React.Fragment>
        <Helmet>
          <title>BootcampAvenue</title>
        </Helmet>
        {mainpageData.topBootcamps && mainpageData.remoteBootcamps && (
          <React.Fragment>
            <TopBootcamps topBootcamps={mainpageData.topBootcamps} />
            <RemoteBootcamps remoteBootcamps={mainpageData.remoteBootcamps} />
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }

  return (
    <div className="main-wrapper">
      <SearchBanner />
      <div className="container-bootcamps">{content}</div>
    </div>
  );
};

export default Landing;

import React from "react";
import Skeleton from "react-loading-skeleton";
import "../pages/style/results.scss";

// just a resemblance for actual component

const SkeletonResults = () => {
  return (
    <React.Fragment>
      {Array(2)
        .fill()
        .map((element, i) => (
          <div className="results-bootcamp-wrapper" key={i}>
              <Skeleton  height={`100%`} />
              <Skeleton height={`100%`} count={4} />
              <Skeleton height={`20%`}   />
           </div>
        ))}
    </React.Fragment>
  );
};

export default SkeletonResults;

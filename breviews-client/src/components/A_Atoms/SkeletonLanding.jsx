import React from "react";
import Skeleton from "react-loading-skeleton";
import "../B_Molecules/style/topbootcamps.scss";

// just a resemblance for actual component

const SkeletonLanding = () => {
  return (
    <>
      {Array(2)
        .fill()
        .map((section, i) => (
          <section key={i}>
            <div className="top-bootcamps-nav">
              <h3></h3>
              <p></p>
            </div>
            <div className="top-bootcamps-list-row">
              {Array(4)
                .fill()
                .map((element, ind) => (
                  <div className="bootcamp-section" key={ind}>
                    <Skeleton height={120} width={`100%`} />
                    <Skeleton height={15} width={`100%`} count={3} />
                  </div>
                ))}
            </div>
          </section>
        ))}
    </>
  );
};

export default SkeletonLanding;



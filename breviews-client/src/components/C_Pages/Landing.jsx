import React from "react";
import "../../style/style.css";
import "../../style/landing.css";
import { Link } from "react-router-dom";
import Footer from "../B_Molecules/Footer.jsx";
import Intro from "../A_Atoms/Intro.jsx";
import Chart from "../B_Molecules/Chart.jsx";
import {
  MODE,
  ITBACKGROUND,
  LOCATION,
  DURATION,
  PRICE
} from "../constants/constants";
import Spinner from "../A_Atoms/Spinner";
import  Rating from 'react-rating';

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainpageData: [],
      isLoaded: false
    };
  }
  // for warning use makeCancelable library
  componentDidMount() {
    fetch("/api/landing")
      .then(response => response.json())
      .then(result => {
        this.setState({
          mainpageData: result,
          isLoaded: true
        });
      });
  }
  render() {
    let { mainpageData, isLoaded } = this.state;
    console.log("mainpageData", mainpageData);
 

    let content = <Spinner />;

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
                </div>

                <div className="company-definition-wrapper">
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
                  <p id="bootcamp-definition-text">{bootcamp.definition} </p>
                  <p id="bootcamp-definition">
                    <span id="bootcamp-highlight">{MODE}: </span>{" "}
                    {bootcamp.mode}
                  </p>
                  <p id="bootcamp-definition">
                    <span id="bootcamp-highlight">{ITBACKGROUND}: </span>{" "}
                    {bootcamp.itbackground}
                  </p>
                  <p id="bootcamp-definition">
                    <span id="bootcamp-highlight">{LOCATION}: </span>
                    {bootcamp.location}
                  </p>
                  <p id="bootcamp-definition">
                    <span id="bootcamp-highlight">{DURATION}: </span>
                    {bootcamp.duration}
                  </p>
                  <p id="bootcamp-definition">
                    <span id="bootcamp-highlight">{PRICE}: </span>
                    {bootcamp.price}
                  </p>
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
        <Intro />
        {content}
        <Chart mainpageData={mainpageData}/>
        <Footer />
      </div>
    );
  }
}

export default Landing;

// return (
//   <div className="main-wrapper">
//     <Header />
//     <Intro />
//     {/* B LIST Start */}
//     <div className="bootcamps-list">
//       <div className="bootcamps-list-row">
//         <section className="bootcamp-section">
//           <div className="review-logo-header">
//             <div className="bootcamp-logo">
//               <img src="./public/assets/seytech-logo.png" />
//             </div>
//             <h3>
//               {" "}
//               <a href="https://www.seytech.co" target="_blank">
//                 {" "}
//                 Seytech{" "}
//               </a>{" "}
//             </h3>
//           </div>
//           <div className="company-definition-wrapper">
//             <span className="review-overall">
//               <span id="overall-review-text">Overall: </span> 4.8/5 (
//               {`${seytechData.reviewsCount}`} reviews)
//             </span>
//             <p id="bootcamp-definition-text">{SEYTECH_DEFINITION} </p>
//             <p id="bootcamp-definition">
//               <span id="bootcamp-highlight">{MODE}:</span> online, onsite in
//               progress{" "}
//             </p>
//             <p id="bootcamp-definition">
//               <span id="bootcamp-highlight">{ITBACKGROUND}:</span> not
//               required
//             </p>
//             <p id="bootcamp-definition">
//               <span id="bootcamp-highlight">{LOCATION}:</span> online,
//               Seattle, Chicago
//             </p>
//             <p id="bootcamp-definition">
//               <span id="bootcamp-highlight">{DURATION}:</span> 6 month
//             </p>
//             <p id="bootcamp-definition">
//               <span id="bootcamp-highlight">{PRICE}:</span> 12K total, 1K
//               per month, 6K after placement
//             </p>
//           </div>
//           {/* first review start */}
//           {seytechData.reviewsCount > 0 ? (
//             <div className="first-review-wrapper">
//               <div className="first-review" key={seytechData.lastreview.id}>
//                 <h4 id="review-author">anonymous</h4>
//                 <p id="review-date"> {seytechData.lastreview.date} </p>
//                 <p
//                   id="review-pros"
//                   style={{
//                     width: "100%",
//                     textAlign: "left",
//                     fontSize: "80%"
//                   }}
//                 >
//                   <span style={{ color: "green" }}>PROS: </span>
//                   {seytechData.lastreview.pros}
//                 </p>
//                 <p
//                   id="review-pros"
//                   style={{
//                     width: "100%",
//                     textAlign: "left",
//                     fontSize: "80%"
//                   }}
//                 >
//                   <span style={{ color: "darkred" }}>CONS: </span>
//                   {seytechData.lastreview.cons}
//                 </p>
//                 <p
//                   id="review-pros"
//                   style={{
//                     width: "100%",
//                     textAlign: "left",
//                     fontSize: "80%"
//                   }}
//                 >
//                   <span id="year-graduated">Year graduated: </span>
//                   {seytechData.lastreview.dateGraduated}
//                 </p>
//                 <p id="review-text">{seytechData.lastreview.review}</p>
//               </div>
//             </div>
//           ) : (
//             <div className="first-review-wrapper">
//               <div className="first-review">
//                 <h4 id="review-author">anonymous</h4>
//                 <p id="review-date"> </p>
//                 <p
//                   id="review-pros"
//                   style={{
//                     width: "100%",
//                     textAlign: "left",
//                     fontSize: "80%"
//                   }}
//                 >
//                   <span style={{ color: "green" }}>PROS: </span>
//                 </p>
//                 <p
//                   id="review-pros"
//                   style={{
//                     width: "100%",
//                     textAlign: "left",
//                     fontSize: "80%"
//                   }}
//                 >
//                   <span style={{ color: "darkred" }}>CONS: </span>
//                 </p>
//                 <p
//                   id="review-pros"
//                   style={{
//                     width: "100%",
//                     textAlign: "left",
//                     fontSize: "80%"
//                   }}
//                 >
//                   <span style={{ color: "gray" }}>Year graduated: </span>
//                 </p>
//                 <p id="review-text">no reviews yet</p>
//               </div>
//             </div>
//           )}
//           {/* first review end */}
//           <div>
//             <p className="more-reviews">
//               <Link to="/seytech">LEAVE AND READ MORE REVIEWS</Link>
//             </p>
//           </div>
//         </section>

//         <section className="bootcamp-section">
//           <div className="review-logo-header">
//             <div className="bootcamp-logo">
//               <img src="./public/assets/cybertek_logo_header.svg" />
//             </div>
//             <h3>
//               <a href="https://cybertekschool.com" target="_blank">
//                 Cybertek
//               </a>
//             </h3>
//           </div>
//           <div className="company-definition-wrapper">
//             <p className="review-overall">
//               <span id="overall-review-text">Overall: </span> 4.85/5 (
//               {cybertekData.reviewsCount} reviews)
//             </p>
//             <p id="bootcamp-definition-text"> {CYBERTEK_DEFINITION} </p>
//             <p id="bootcamp-definition">
//               <span id="bootcamp-highlight">{MODE}:</span> onsite, online
//             </p>
//             <p id="bootcamp-definition">
//               <span id="bootcamp-highlight">{ITBACKGROUND}:</span> not
//               required
//             </p>
//             <p id="bootcamp-definition">
//               <span id="bootcamp-highlight">{LOCATION}:</span> Virgina,
//               Chicago, London, online
//             </p>
//             <p id="bootcamp-definition">
//               <span id="bootcamp-highlight">{DURATION}:</span> 7 month
//             </p>
//             <p id="bootcamp-definition">
//               <span id="bootcamp-highlight">{PRICE}:</span> 16K total. 14K
//               to Cybertek, 2K to Comunity Center donation{" "}
//             </p>
//           </div>
//           {cybertekData.reviewsCount > 0 ? (
//             <div className="first-review-wrapper">
//               <div
//                 className="first-review"
//                 key={cybertekData.lastreview.id}
//               >
//                 <h4 id="review-author">anonymous</h4>
//                 <p id="review-date"> {cybertekData.lastreview.date} </p>
//                 <p
//                   id="review-pros"
//                   style={{
//                     width: "100%",
//                     textAlign: "left",
//                     fontSize: "80%"
//                   }}
//                 >
//                   <span style={{ color: "green" }}>PROS: </span>
//                   {cybertekData.lastreview.pros}
//                 </p>
//                 <p
//                   id="review-pros"
//                   style={{
//                     width: "100%",
//                     textAlign: "left",
//                     fontSize: "80%"
//                   }}
//                 >
//                   <span style={{ color: "darkred" }}>CONS: </span>
//                   {cybertekData.lastreview.cons}
//                 </p>
//                 <p
//                   id="review-pros"
//                   style={{
//                     width: "100%",
//                     textAlign: "left",
//                     fontSize: "80%"
//                   }}
//                 >
//                   <span style={{ color: "gray" }}>Year graduated: </span>
//                   {cybertekData.lastreview.dateGraduated}
//                 </p>
//                 <p id="review-text">{cybertekData.lastreview.review}</p>
//               </div>
//             </div>
//           ) : (
//             <div className="first-review-wrapper">
//               <div className="first-review">
//                 <h4 id="review-author">anonymous</h4>
//                 <p id="review-date"> </p>
//                 <p
//                   id="review-pros"
//                   style={{
//                     width: "100%",
//                     textAlign: "left",
//                     fontSize: "80%"
//                   }}
//                 >
//                   <span style={{ color: "green" }}>PROS: </span>
//                 </p>
//                 <p
//                   id="review-pros"
//                   style={{
//                     width: "100%",
//                     textAlign: "left",
//                     fontSize: "80%"
//                   }}
//                 >
//                   <span style={{ color: "darkred" }}>CONS: </span>
//                 </p>
//                 <p
//                   id="review-pros"
//                   style={{
//                     width: "100%",
//                     textAlign: "left",
//                     fontSize: "80%"
//                   }}
//                 >
//                   <span style={{ color: "gray" }}>Year graduated: </span>
//                 </p>
//                 <p id="review-text">no reviews yet</p>
//               </div>
//             </div>
//           )}
//           <p className="more-reviews">
//             <Link to="/cybertek">LEAVE AND READ MORE REVIEWS</Link>{" "}
//           </p>
//         </section>

//         <section className="bootcamp-section">
//           <div className="review-logo-header">
//             <div className="bootcamp-logo">
//               <img src="./public/assets/salesforceBootcamp-logo-header.png" />
//             </div>
//             <h3>
//               <a href="http://www.developercareer.info" target="_blank">
//                 Salesforce Bootcamp
//               </a>
//             </h3>
//           </div>
//           <div className="company-definition-wrapper">
//             <p className="review-overall">
//               <span id="overall-review-text">Overall: </span> 4.85/5 (
//               {salesforceBootcamp.reviewsCount} reviews)
//             </p>
//             <p id="bootcamp-definition-text"> {SALESFORCE_DEFINITION} </p>
//             <p id="bootcamp-definition">
//               <span id="bootcamp-highlight">{MODE}:</span> onsite, online
//             </p>
//             <p id="bootcamp-definition">
//               <span id="bootcamp-highlight">{ITBACKGROUND}:</span> not
//               required
//             </p>
//             <p id="bootcamp-definition">
//               <span id="bootcamp-highlight">{LOCATION}:</span> online
//             </p>
//             <p id="bootcamp-definition">
//               <span id="bootcamp-highlight">{DURATION}:</span> 6 month
//             </p>
//             <p id="bootcamp-definition">
//               <span id="bootcamp-highlight">{PRICE}:</span> 3.5K total. 2
//               base, 1.5K for certicificates{" "}
//             </p>
//           </div>
//           {salesforceBootcamp.reviewsCount > 0 ? (
//             <div className="first-review-wrapper">
//               <div
//                 className="first-review"
//                 key={salesforceBootcamp.lastreview.id}
//               >
//                 <h4 id="review-author">anonymous</h4>
//                 <p id="review-date">
//                   {" "}
//                   {salesforceBootcamp.lastreview.date}{" "}
//                 </p>
//                 <p
//                   id="review-pros"
//                   style={{
//                     width: "100%",
//                     textAlign: "left",
//                     fontSize: "80%"
//                   }}
//                 >
//                   <span style={{ color: "green" }}>PROS: </span>
//                   {salesforceBootcamp.lastreview.pros}
//                 </p>
//                 <p
//                   id="review-pros"
//                   style={{
//                     width: "100%",
//                     textAlign: "left",
//                     fontSize: "80%"
//                   }}
//                 >
//                   <span style={{ color: "darkred" }}>CONS: </span>
//                   {salesforceBootcamp.lastreview.cons}
//                 </p>
//                 <p
//                   id="review-pros"
//                   style={{
//                     width: "100%",
//                     textAlign: "left",
//                     fontSize: "80%"
//                   }}
//                 >
//                   <span style={{ color: "gray" }}>Year graduated: </span>
//                   {salesforceBootcamp.lastreview.dateGraduated}
//                 </p>
//                 <p id="review-text">
//                   {salesforceBootcamp.lastreview.review}
//                 </p>
//               </div>
//             </div>
//           ) : (
//             <div className="first-review-wrapper">
//               <div className="first-review">
//                 <h4 id="review-author">anonymous</h4>
//                 <p id="review-date"> </p>
//                 <p
//                   id="review-pros"
//                   style={{
//                     width: "100%",
//                     textAlign: "left",
//                     fontSize: "80%"
//                   }}
//                 >
//                   <span style={{ color: "green" }}>PROS: </span>
//                 </p>
//                 <p
//                   id="review-pros"
//                   style={{
//                     width: "100%",
//                     textAlign: "left",
//                     fontSize: "80%"
//                   }}
//                 >
//                   <span style={{ color: "darkred" }}>CONS: </span>
//                 </p>
//                 <p
//                   id="review-pros"
//                   style={{
//                     width: "100%",
//                     textAlign: "left",
//                     fontSize: "80%"
//                   }}
//                 >
//                   <span style={{ color: "gray" }}>Year graduated: </span>
//                 </p>
//                 <p id="review-text">no reviews yet</p>
//               </div>
//             </div>
//           )}
//           <p className="more-reviews">
//             <Link to="/salesforcebootcamp">
//               LEAVE AND READ MORE REVIEWS
//             </Link>{" "}
//           </p>
//         </section>

//         <section className="bootcamp-section">
//           <div className="review-logo-header">
//             <div className="bootcamp-logo">
//               <img src="./public/assets/cloudgateAcademy-logo-header.png" />
//             </div>
//             <h3>
//               <a href="http://www.cloudgate.academy/" target="_blank">
//                 Cloudgate Academy{" "}
//               </a>
//             </h3>
//           </div>
//           <div className="company-definition-wrapper">
//             <p className="review-overall">
//               <span id="overall-review-text">Overall: </span> 4.85/5 (
//               {cloudgateAcademy.reviewsCount} reviews)
//             </p>
//             <p id="bootcamp-definition-text">
//               {" "}
//               {CLOUDGATEACADEMY_DEFINITION}{" "}
//             </p>
//             <p id="bootcamp-definition">
//               <span id="bootcamp-highlight">{MODE}:</span> onsite, online
//             </p>
//             <p id="bootcamp-definition">
//               <span id="bootcamp-highlight">{ITBACKGROUND}:</span> not
//               required
//             </p>
//             <p id="bootcamp-definition">
//               <span id="bootcamp-highlight">{LOCATION}:</span> Chicago,
//               online
//             </p>
//             <p id="bootcamp-definition">
//               <span id="bootcamp-highlight">{DURATION}:</span> 4 month
//             </p>
//             <p id="bootcamp-definition">
//               <span id="bootcamp-highlight">{PRICE}:</span> 6K total{" "}
//             </p>
//           </div>
//           {cloudgateAcademy.reviewsCount > 0 ? (
//             <div className="first-review-wrapper">
//               <div className="first-review" key="test">
//                 <h4 id="review-author">anonymous</h4>
//                 <p id="review-date"> {cloudgateAcademy.lastreview.date} </p>
//                 <p
//                   id="review-pros"
//                   style={{
//                     width: "100%",
//                     textAlign: "left",
//                     fontSize: "80%"
//                   }}
//                 >
//                   <span style={{ color: "green" }}>PROS: </span>
//                   {cloudgateAcademy.lastreview.pros}
//                 </p>
//                 <p
//                   id="review-pros"
//                   style={{
//                     width: "100%",
//                     textAlign: "left",
//                     fontSize: "80%"
//                   }}
//                 >
//                   <span style={{ color: "darkred" }}>CONS: </span>
//                   {cloudgateAcademy.lastreview.cons}
//                 </p>
//                 <p
//                   id="review-pros"
//                   style={{
//                     width: "100%",
//                     textAlign: "left",
//                     fontSize: "80%"
//                   }}
//                 >
//                   <span style={{ color: "gray" }}>Year graduated: </span>
//                   {cloudgateAcademy.lastreview.dateGraduated}
//                 </p>
//                 <p id="review-text">{cloudgateAcademy.lastreview.review}</p>
//               </div>
//             </div>
//           ) : (
//             <div className="first-review-wrapper">
//               <div className="first-review">
//                 <h4 id="review-author">anonymous</h4>
//                 <p id="review-date"> </p>
//                 <p
//                   id="review-pros"
//                   style={{
//                     width: "100%",
//                     textAlign: "left",
//                     fontSize: "80%"
//                   }}
//                 >
//                   <span style={{ color: "green" }}>PROS: </span>
//                 </p>
//                 <p
//                   id="review-pros"
//                   style={{
//                     width: "100%",
//                     textAlign: "left",
//                     fontSize: "80%"
//                   }}
//                 >
//                   <span style={{ color: "darkred" }}>CONS: </span>
//                 </p>
//                 <p
//                   id="review-pros"
//                   style={{
//                     width: "100%",
//                     textAlign: "left",
//                     fontSize: "80%"
//                   }}
//                 >
//                   <span style={{ color: "gray" }}>Year graduated: </span>
//                 </p>
//                 <p id="review-text">no reviews yet</p>
//               </div>
//             </div>
//           )}
//           <p className="more-reviews">
//             <Link to="/cloudgateacademy">LEAVE AND READ MORE REVIEWS</Link>{" "}
//           </p>
//         </section>
//       </div>
//       {/* B LIST End */}
//     </div>
//     <Footer />
//   </div>
// );

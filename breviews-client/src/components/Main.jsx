import React from 'react';
import '../style/style.css';
import {
    Link
  } from "react-router-dom";
import Header from './B_Molecules/Header.jsx';
import Footer from './B_Molecules/Footer.jsx';

import Intro from './A_Atoms/Intro.jsx';


class Main extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
          
        let { data } = this.props.data;
        let firstReview = data[0]
        let seytechReviewCount = data.length;
        console.log(firstReview)

        return (
            <div className="main-wrapper">
                <Header />
                <Intro />
                {/* B LIST Start */}
                <div className="bootcamps-list">

                    <div className="bootcamps-list-row"> 

                        <section className="bootcamp-section">
                            <div className="review-logo-header">  
                                <div className="bootcamp-logo">
                                    <img src="./public/assets/seytech-logo.png" />
                                </div> 
                                <h3> <a href="https://www.seytech.co" target="_blank"> Seytech </a> </h3>
                            </div>
                            <div className="company-definition-wrapper">
                                <span className="review-overall"><span id="overall-review-text">Overall: </span> 4.8/5 ({ `${seytechReviewCount}` } reviews)</span>
                                <p id="bootcamp-definition-text">Seytech is a fullstack software developer bootcamp. Their course is a remote, online learning experience that teaches everything needs to know to become a successful software engineer...</p>
                                <p id="bootcamp-definition"><span id="bootcamp-highlight">MODE:</span> online, onsite in progress </p>
                                <p id="bootcamp-definition"><span id="bootcamp-highlight">IT background:</span> not required</p>
                                <p id="bootcamp-definition"><span id="bootcamp-highlight">LOCATION:</span> online, Seattle, Chicago</p>
                                <p id="bootcamp-definition"><span id="bootcamp-highlight">LENGTH:</span> 6 month</p>
                                <p id="bootcamp-definition"><span id="bootcamp-highlight">PRICE:</span> 12K total, 1K per month, 6K after placement</p>
                            </div>
                            {/* first review start */} 
                            {
                            <div className="first-review-wrapper">
                                <div className="first-review" key={firstReview._id}>
                                    <h4 id="review-author">anonymous</h4>
                                    <p id="review-date"> {firstReview.date} </p>
                                    <p id="review-pros" style={{width: "100%", textAlign: "left", fontSize: "80%"}}>
                                    <span style={{color: "green"}}>PROS: </span>  
                                        {firstReview.pros}    
                                    </p>
                                    <p id="review-pros" style={{width: "100%", textAlign: "left", fontSize: "80%"}}>
                                        <span style={{color: "darkred"}}>CONS: </span>     
                                        {firstReview.cons}    
                                    </p>
                                    <p id="review-pros" style={{width: "100%", textAlign: "left", fontSize: "80%"}}>
                                        <span id="year-graduated" >Year graduated: </span>     
                                        {firstReview.dateGraduated}    
                                    </p>
                                    <p id="review-text">
                                        {firstReview.review}    
                                    </p>
                                </div>
                            </div>
                            }
                            {/* first review end */} 
                            <div>
                                <p className="more-reviews"><Link to="/seytech">LEAVE AND READ MORE REVIEWS</Link></p>
                            </div>
                        
                        </section>
                        <section className="bootcamp-section">
                            <div className="review-logo-header"> 
                                <div className="bootcamp-logo">
                                    <img src="./public/assets/cybertek_logo_header.svg" />
                                </div> 
                                <h3><a href="https://cybertekschool.com" target="_blank">Cybertek</a></h3>
                            </div>
                            <div className="company-definition-wrapper">
                                <p className="review-overall"><span id="overall-review-text">Overall: </span> 4.85/5 (325 reviews)</p>
                                <p id="bootcamp-definition-text">
                                    Cybertek School teaches you coding and transforms you into an SDET developer through a 7 month, 
                                    full-time and intensive program (remote and onsite). 
                                </p>
                                <p id="bootcamp-definition"><span id="bootcamp-highlight">MODE:</span> onsite, online</p>
                                <p id="bootcamp-definition"><span id="bootcamp-highlight">IT background:</span> not required</p>
                                <p id="bootcamp-definition"><span id="bootcamp-highlight">LOCATION:</span> Virgina, Chicago, London, online</p>
                                <p id="bootcamp-definition"><span id="bootcamp-highlight">LENGTH:</span> 7 month</p>
                                <p id="bootcamp-definition"><span id="bootcamp-highlight">PRICE:</span> 16K total. 14K to Cybertek, 2K to Comunity Center donation </p>
                            </div>
                            {
                            <div className="first-review-wrapper">
                                <div className="first-review" key={firstReview._id}>
                                    <h4 id="review-author">anonymous</h4>
                                    <p id="review-date"> {firstReview.date} </p>
                                    <p id="review-pros" style={{width: "100%", textAlign: "left", fontSize: "80%"}}>
                                    <span style={{color: "green"}}>PROS: </span>  
                                        {firstReview.pros}    
                                    </p>
                                    <p id="review-pros" style={{width: "100%", textAlign: "left", fontSize: "80%"}}>
                                        <span style={{color: "darkred"}}>CONS: </span>     
                                        {firstReview.cons}    
                                    </p>
                                    <p id="review-pros" style={{width: "100%", textAlign: "left", fontSize: "80%"}}>
                                        <span style={{color: "gray"}}>Year graduated: </span>     
                                        {firstReview.dateGraduated}    
                                    </p>
                                    <p id="review-text">
                                        {firstReview.review}    
                                        Cybertek School teaches you coding and transforms you into an SDET developer through a 7 month, 
                                full-time and intensive program (remote and onsite). 
                                Cybertek School teaches you coding and transforms you into an SDET developer through a 7 month, 
                                full-time and intensive program (remote and onsite). 

                                    </p>
                                </div>
                            </div>
                            }
                            <p className="more-reviews"><Link to="/cybertek">LEAVE AND READ MORE REVIEWS</Link> </p>
                        </section>                
                        <section className="bootcamp-section">
                            <div className="review-logo-header"> 
                                <div className="bootcamp-logo">
                                    <img src="./public/assets/salesforceBootcamp-logo-header.png" />
                                </div> 
                                <h3><a href="http://www.developercareer.info" target="_blank">Salesforce Bootcamp</a></h3>
                            </div>
                            <div className="company-definition-wrapper">
                                <p className="review-overall"><span id="overall-review-text">Overall: </span> 4.85/5 (325 reviews)</p>
                                <p id="bootcamp-definition-text">
                                    Owner personally works With students one-on-one to help become a Salesforce Developer over the next 4 Months! Limited to 20 currently.
                                </p>
                                <p id="bootcamp-definition"><span id="bootcamp-highlight">MODE:</span> onsite, online</p>
                                <p id="bootcamp-definition"><span id="bootcamp-highlight">IT background:</span> not required</p>
                                <p id="bootcamp-definition"><span id="bootcamp-highlight">LOCATION:</span> online</p>
                                <p id="bootcamp-definition"><span id="bootcamp-highlight">LENGTH:</span> 6 month</p>
                                <p id="bootcamp-definition"><span id="bootcamp-highlight">PRICE:</span> 3.5K total. 2 base, 1.5K for certicificates </p>
                            </div>
                            {
                            <div className="first-review-wrapper">
                                <div className="first-review" key={firstReview._id}>
                                    <h4 id="review-author">anonymous</h4>
                                    <p id="review-date"> {firstReview.date} </p>
                                    <p id="review-pros" style={{width: "100%", textAlign: "left", fontSize: "80%"}}>
                                    <span style={{color: "green"}}>PROS: </span>  
                                        {firstReview.pros}    
                                    </p>
                                    <p id="review-pros" style={{width: "100%", textAlign: "left", fontSize: "80%"}}>
                                        <span style={{color: "darkred"}}>CONS: </span>     
                                        {firstReview.cons}    
                                    </p>
                                    <p id="review-pros" style={{width: "100%", textAlign: "left", fontSize: "80%"}}>
                                        <span style={{color: "gray"}}>Year graduated: </span>     
                                        {firstReview.dateGraduated}    
                                    </p>
                                    <p id="review-text">
                                        {firstReview.review}    
                                        School teaches you coding and transforms you into an SDET developer through a 7 month, full-time and intensive program.
                                    </p>
                                </div>
                        </div>
                            }
                            <p className="more-reviews"><Link to="/salesforcebootcamp">LEAVE AND READ MORE REVIEWS</Link> </p>
                        </section>
                        <section className="bootcamp-section">
                            <div className="review-logo-header"> 
                                <div className="bootcamp-logo">
                                    <img src="./public/assets/cloudgateAcademy-logo-header.png" />
                                </div> 
                                <h3><a href="http://www.cloudgate.academy/" target="_blank">Cloudgate Academy </a></h3>
                            </div>
                            <div className="company-definition-wrapper">
                                <p className="review-overall"><span id="overall-review-text">Overall: </span> 4.85/5 (325 reviews)</p>
                                <p id="bootcamp-definition-text">
                                AWS tools are very popular in the industry today. We teach below concepts: Operating System, AWS Products, Linux CLI concepts, Networking fundamentals etc.
                                NO Salary percentage! NO job placement fee!   
                                </p>
                                <p id="bootcamp-definition"><span id="bootcamp-highlight">MODE:</span> onsite, online</p>
                                <p id="bootcamp-definition"><span id="bootcamp-highlight">IT background:</span> not required</p>
                                <p id="bootcamp-definition"><span id="bootcamp-highlight">LOCATION:</span> Chicago, online</p>
                                <p id="bootcamp-definition"><span id="bootcamp-highlight">LENGTH:</span> 4 month</p>
                                <p id="bootcamp-definition"><span id="bootcamp-highlight">PRICE:</span> 6K total  </p>
                            </div>
                            {
                            <div className="first-review-wrapper">
                                <div className="first-review" key={firstReview._id}>
                                    <h4 id="review-author">anonymous</h4>
                                    <p id="review-date"> {firstReview.date} </p>
                                    <p id="review-pros" style={{width: "100%", textAlign: "left", fontSize: "80%"}}>
                                    <span style={{color: "green"}}>PROS: </span>  
                                        {firstReview.pros}    
                                    </p>
                                    <p id="review-pros" style={{width: "100%", textAlign: "left", fontSize: "80%"}}>
                                        <span style={{color: "darkred"}}>CONS: </span>     
                                        {firstReview.cons}    
                                    </p>
                                    <p id="review-pros" style={{width: "100%", textAlign: "left", fontSize: "80%"}}>
                                        <span style={{color: "gray"}}>Year graduated: </span>     
                                        {firstReview.dateGraduated}    
                                    </p>
                                    <p id="review-text">
                                        {firstReview.review}    
                                        Cybertek School teaches you coding and transforms you into an SDET developer through a 7 month, full-time and intensive program (remote and onsite). 
                                    </p>
                                </div>
                        </div>
                            }
                            <p className="more-reviews"><Link to="/cloudgateacademy">LEAVE AND READ MORE REVIEWS</Link> </p>
                        </section>   
                    
                    </div>
                    {/* B LIST End */}

                </div>
                <Footer />
            </div>
        )
    }

}

export default Main;
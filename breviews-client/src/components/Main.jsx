import React from 'react';
import '../style/style.css';
import {
    Link
  } from "react-router-dom";
import Header from './Header.jsx';

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
            <>
                <Header />
                <div className="intro">  
                    <h2>Not sure which bootcamp to choose?</h2>
                    <p>This website will help you decide</p>   
                </div>
                <div className="bootcamps-list">
    
                    <section className="b1">
                        <div className="review-logo-header">  
                            <div id="b1-logo">
                                <img src="./public/assets/seytech-logo.png" />
                            </div> 
                            <h3> <a href="https://www.seytech.co" target="_blank"> Seytech </a> </h3>
                        </div>
                        <span className="review-overall">Overall: 4.8/5 ({ `${seytechReviewCount}` } reviews)</span>
                        <p id="bootcamp-definition">Seytech is a fullstack software developer bootcamp. Their course is a remote, online learning experience that teaches everything needs to know to become a successful software engineer...</p>
                        <p><span id="bootcamp-highlight">MODE:</span> online</p>
                        <p><span id="bootcamp-highlight">IT background:</span> not required</p>
                        <p><span id="bootcamp-highlight">LOCATION:</span> online, Seattle, Chicago</p>
                        <p><span id="bootcamp-highlight">LENGTH:</span> 6 month</p>
                        <p><span id="bootcamp-highlight">PRICE:</span> 12K total, 6K initial, 6K after placement</p>
                        {/* first review */} 
                        {
                        <div className="customer-reviews" key={firstReview._id}>
                            <div className="review-wrapper">
                                <h4 id="review-author">anonymous</h4>
                                <span id="review-date"> {firstReview.date} </span>
                                <p id="review-text">
                                    {firstReview.review}    
                                </p>
                            </div>
                        </div>
                        }
                        <div>
                            <p className="more-reviews"><Link to="/seytech">LEAVE AND READ MORE REVIEWS</Link></p>
                        </div>
                    
                    </section>
    
                    <section className="b2">
                        <div className="review-logo-header"> 
                            <div id="b2-logo">
                                <img src="./public/assets/cybertek_logo_header.svg" />
                            </div> 
                            <h3><a href="https://cybertekschool.com" target="_blank">Cybertek</a></h3>
                        </div>
                        <span className="review-overall">Overall: 4.85/5 (325 reviews)</span>
                        <p id="bootcamp-definition">Cybertek School teaches you coding and transforms you into an SDET developer through a 7 month, full-time and intensive program (remote and onsite). There are no shortcuts. There are no empty promises. Our graduates finish our program becoming the best technical candidates in the market and landing jobs at some of the most prestigious companies in the country.</p>
                        <p><span id="bootcamp-highlight">MODE:</span> onsite, online</p>
                        <p><span id="bootcamp-highlight">IT background:</span> not required</p>
                        <p><span id="bootcamp-highlight">LOCATION:</span> Chicago, Washington, online</p>
                        <p><span id="bootcamp-highlight">LENGTH:</span> 7 month</p>
                        <p><span id="bootcamp-highlight">PRICE:</span> 12K total, 6K initial, 6K after placement</p>
                        <div className="customer-reviews">
                            <div className="review-wrapper">
                                <h4 id="review-author">anonymous</h4>
                                <span id="review-date">03/03/2020</span>
                                <p id="review-text">
                                    i really like their curriculum 
                                    and help i got from instructors
                                    ...                 
                                </p>
                            </div>
                        </div>
                        <p className="more-reviews">READ MORE REVIEWS >> </p>
                    </section>
    
                </div>
    
                <footer>
                    <p>All Rights Reserved</p>
                    <p>© 2020</p>
                </footer>
            </>
        )
    }

}

export default Main;
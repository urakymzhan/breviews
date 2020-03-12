import React from 'react';
import '../style/style.css';
import {
    Link
  } from "react-router-dom";

class Main extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        let { data, nameInput, reviewInput } = this.props.data;
        let { handleSubmit, handleChange } = this.props;
        return (
            <>
                {/* <h3 id="header-tmp">bootcamp-reviews.com</h3> */}
                <header>
                    <nav id="header-nav">
                        <ul id="logo-wrapper">
                            <li id="header-logo"><Link to="/"><img id="brlogo" src="./public/assets/brlogo3.png"/></Link></li>
                        </ul>
                        <ul id="tc-wrapper">
                            <li id="header-team">
                                <Link to="/team">Team</Link>
                            </li>
                            <li id="header-contact">
                                <Link to="/contact">Contact</Link>
                            </li>
                            <li id="header-legal">
                                <Link to="/legal">Legal</Link>
                            </li>   
                        </ul>
                    </nav>       
                </header>
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
                        <span className="review-overall">Overall: 4.8/5 (112 reviews)</span>
                        <p id="bootcamp-definition">Seytech is a fullstack software developer bootcamp. Their course is a remote, online learning experience that teaches everything needs to know to become a successful software engineer...</p>
                        <p><span id="bootcamp-highlight">MODE:</span> online</p>
                        <p><span id="bootcamp-highlight">IT background:</span> not required</p>
                        <p><span id="bootcamp-highlight">LOCATION:</span> online, Seattle, Chicago</p>
                        <p><span id="bootcamp-highlight">LENGTH:</span> 6 month</p>
                        <p><span id="bootcamp-highlight">PRICE:</span> 12K total, 6K initial, 6K after placement</p>
                        {/* review section start */} 
                        {
                            data.map((element) => {
                                return(
                                    <div className="customer-reviews" key={element._id}>
                                        <div className="review-wrapper">
                                            <h4 id="review-author">Ulan</h4>
                                            <span id="review-date"> {element.date} </span>
                                            <p id="review-text">
                                                {element.review}    
                                            </p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        {/* review section end */}
                        <div className="leave-review" style={{margin: "10px 0"}}>
                            {/* review form start */}
                            <form onSubmit={handleSubmit} style={{border: "none", width: "100%", backgroundColor: "#f2f2f2", textAlign: "center"}}>
                                <div>
                                    <label style={{width: "100%", textAlign: "left"}}>
                                    Leave a review:
                                    <input
                                        name="name"
                                        style={{width: "100%", padding: "10px", border: "none", borderRadius: "10px", margin: "1em 0"}}
                                        type="text"
                                        value={nameInput}
                                        placeholder="Name - We don't show it on page"
                                        onChange={handleChange}
                                    />
                                    <input
                                        name="review"
                                        style={{width: "100%", padding: "10px", border: "none", borderRadius: "10px", margin: "1em 0"}}
                                        type="text"
                                        placeholder="Type here ..."
                                        value={reviewInput}
                                        onChange={handleChange}
                                    />
                                    </label>
                                </div>
                                <div>
                                    <input 
                                        type="submit" 
                                        value="Submit" 
                                        style={{width: "50%", padding: "8px", border: "none", borderRadius: "10px"}}
                                    />
                                </div>
                            </form>
                            {/* review form end */}
                        </div>
                        <div>
                            <p className="more-reviews"><Link to="/seytech">>READ MORE REVIEWS >></Link></p>
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
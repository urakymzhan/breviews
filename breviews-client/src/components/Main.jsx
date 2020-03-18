import React from 'react';
import '../style/style.css';
import { Link } from "react-router-dom";
import Header from './B_Molecules/Header.jsx';
import Footer from './B_Molecules/Footer.jsx';
import Intro from './A_Atoms/Intro.jsx';
import { MODE, ITBACKGROUND, 
        LOCATION, DURATION, PRICE,
        SEYTECH_DEFINITION, CYBERTEK_DEFINITION,
        CLOUDGATEACADEMY_DEFINITION, SALESFORCE_DEFINITION
         } 
    from './constants'

class Main extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
          
        let { data } = this.props.data;
        // getting each bootcamps first reviews 
        // might design differently later because doing this same thing inside each particular bootcamp page
        let seytechData = [];
        let cybertekData = [];
        let cloudgateAcademy = [];
        let salesforceBootcamp = [];
        data.map ((obj) => {
            if (obj.schoolname == "seytech") {
                seytechData.push(obj);
            }
            if (obj.schoolname == "cybertek") {
                cybertekData.push(obj);
            }
            if (obj.schoolname == "cloudgateacademy") {
                cloudgateAcademy.push(obj);
            }
            if (obj.schoolname == "salesforcebootcamp") {
                salesforceBootcamp.push(obj);
            }
        })
        let seytechreviewCount = seytechData.length;
        let cybertekreviewCount = cybertekData.length;
        let cloudgateacademyreviewCount = cloudgateAcademy.length;
        let salesforcebootcampreviewCount = salesforceBootcamp.length;


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
                                <span className="review-overall"><span id="overall-review-text">Overall: </span> 4.8/5 ({ `${seytechreviewCount}` } reviews)</span>
                                <p id="bootcamp-definition-text">{ SEYTECH_DEFINITION } </p>
                                <p id="bootcamp-definition"><span id="bootcamp-highlight">{ MODE }:</span> online, onsite in progress </p>
                                <p id="bootcamp-definition"><span id="bootcamp-highlight">{ ITBACKGROUND }:</span> not required</p>
                                <p id="bootcamp-definition"><span id="bootcamp-highlight">{ LOCATION }:</span> online, Seattle, Chicago</p>
                                <p id="bootcamp-definition"><span id="bootcamp-highlight">{ DURATION }:</span> 6 month</p>
                                <p id="bootcamp-definition"><span id="bootcamp-highlight">{ PRICE }:</span> 12K total, 1K per month, 6K after placement</p>
                            </div>
                            {/* first review start */} 
                            {
                                seytechreviewCount > 0 ?
                                    <div className="first-review-wrapper">
                                        <div className="first-review" key={seytechData[0]._id}>
                                            <h4 id="review-author">anonymous</h4>
                                            <p id="review-date"> {seytechData[0].date} </p>
                                            <p id="review-pros" style={{width: "100%", textAlign: "left", fontSize: "80%"}}>
                                            <span style={{color: "green"}}>PROS: </span>  
                                                {seytechData[0].pros}    
                                            </p>
                                            <p id="review-pros" style={{width: "100%", textAlign: "left", fontSize: "80%"}}>
                                                <span style={{color: "darkred"}}>CONS: </span>     
                                                {seytechData[0].cons}    
                                            </p>
                                            <p id="review-pros" style={{width: "100%", textAlign: "left", fontSize: "80%"}}>
                                                <span id="year-graduated" >Year graduated: </span>     
                                                {seytechData[0].dateGraduated}    
                                            </p>
                                            <p id="review-text">
                                                {seytechData[0].review}    
                                            </p>
                                        </div>
                                    </div>
                                    :
                                    <div className="first-review-wrapper">
                                        <div className="first-review">
                                            <h4 id="review-author">anonymous</h4>
                                            <p id="review-date">  </p>
                                            <p id="review-pros" style={{width: "100%", textAlign: "left", fontSize: "80%"}}>
                                            <span style={{color: "green"}}>PROS: </span>  
                                                
                                            </p>
                                            <p id="review-pros" style={{width: "100%", textAlign: "left", fontSize: "80%"}}>
                                                <span style={{color: "darkred"}}>CONS: </span>     
                                                    
                                            </p>
                                            <p id="review-pros" style={{width: "100%", textAlign: "left", fontSize: "80%"}}>
                                                <span style={{color: "gray"}}>Year graduated: </span>     
                                                
                                            </p>
                                            <p id="review-text">
                                                no reviews yet    
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
                                <p className="review-overall"><span id="overall-review-text">Overall: </span> 4.85/5 ({cybertekreviewCount} reviews)</p>
                                <p id="bootcamp-definition-text"> {CYBERTEK_DEFINITION } </p>
                                <p id="bootcamp-definition"><span id="bootcamp-highlight">{ MODE }:</span> onsite, online</p>
                                <p id="bootcamp-definition"><span id="bootcamp-highlight">{ ITBACKGROUND }:</span> not required</p>
                                <p id="bootcamp-definition"><span id="bootcamp-highlight">{ LOCATION }:</span> Virgina, Chicago, London, online</p>
                                <p id="bootcamp-definition"><span id="bootcamp-highlight">{ DURATION }:</span> 7 month</p>
                                <p id="bootcamp-definition"><span id="bootcamp-highlight">{ PRICE }:</span> 16K total. 14K to Cybertek, 2K to Comunity Center donation </p>
                            </div>
                            {
                                cybertekreviewCount > 0 ?
                                    <div className="first-review-wrapper">
                                        <div className="first-review" key={cybertekData[0]._id}>
                                            <h4 id="review-author">anonymous</h4>
                                            <p id="review-date"> {cybertekData[0].date} </p>
                                            <p id="review-pros" style={{width: "100%", textAlign: "left", fontSize: "80%"}}>
                                            <span style={{color: "green"}}>PROS: </span>  
                                                {cybertekData[0].pros}    
                                            </p>
                                            <p id="review-pros" style={{width: "100%", textAlign: "left", fontSize: "80%"}}>
                                                <span style={{color: "darkred"}}>CONS: </span>     
                                                {cybertekData[0].cons}    
                                            </p>
                                            <p id="review-pros" style={{width: "100%", textAlign: "left", fontSize: "80%"}}>
                                                <span style={{color: "gray"}}>Year graduated: </span>     
                                                {cybertekData[0].dateGraduated}    
                                            </p>
                                            <p id="review-text">
                                                {cybertekData[0].review}    
                                            </p>
                                        </div>
                                    </div>
                                    :
                                    <div className="first-review-wrapper">
                                        <div className="first-review">
                                            <h4 id="review-author">anonymous</h4>
                                            <p id="review-date">  </p>
                                            <p id="review-pros" style={{width: "100%", textAlign: "left", fontSize: "80%"}}>
                                            <span style={{color: "green"}}>PROS: </span>  
                                                
                                            </p>
                                            <p id="review-pros" style={{width: "100%", textAlign: "left", fontSize: "80%"}}>
                                                <span style={{color: "darkred"}}>CONS: </span>     
                                                    
                                            </p>
                                            <p id="review-pros" style={{width: "100%", textAlign: "left", fontSize: "80%"}}>
                                                <span style={{color: "gray"}}>Year graduated: </span>     
                                                
                                            </p>
                                            <p id="review-text">
                                                no reviews yet    
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
                                <p className="review-overall"><span id="overall-review-text">Overall: </span> 4.85/5 ({salesforcebootcampreviewCount} reviews)</p>
                                <p id="bootcamp-definition-text"> { SALESFORCE_DEFINITION } </p>
                                <p id="bootcamp-definition"><span id="bootcamp-highlight">{ MODE }:</span> onsite, online</p>
                                <p id="bootcamp-definition"><span id="bootcamp-highlight">{ ITBACKGROUND }:</span> not required</p>
                                <p id="bootcamp-definition"><span id="bootcamp-highlight">{ LOCATION }:</span> online</p>
                                <p id="bootcamp-definition"><span id="bootcamp-highlight">{ DURATION }:</span> 6 month</p>
                                <p id="bootcamp-definition"><span id="bootcamp-highlight">{ PRICE }:</span> 3.5K total. 2 base, 1.5K for certicificates </p>
                            </div>
                            {
                                salesforcebootcampreviewCount > 0 ?
                                    <div className="first-review-wrapper">
                                        <div className="first-review" key={salesforceBootcamp[0]._id}>
                                            <h4 id="review-author">anonymous</h4>
                                            <p id="review-date"> {salesforceBootcamp[0].date} </p>
                                            <p id="review-pros" style={{width: "100%", textAlign: "left", fontSize: "80%"}}>
                                            <span style={{color: "green"}}>PROS: </span>  
                                                {salesforceBootcamp[0].pros}    
                                            </p>
                                            <p id="review-pros" style={{width: "100%", textAlign: "left", fontSize: "80%"}}>
                                                <span style={{color: "darkred"}}>CONS: </span>     
                                                {salesforceBootcamp[0].cons}    
                                            </p>
                                            <p id="review-pros" style={{width: "100%", textAlign: "left", fontSize: "80%"}}>
                                                <span style={{color: "gray"}}>Year graduated: </span>     
                                                {salesforceBootcamp[0].dateGraduated}    
                                            </p>
                                            <p id="review-text">
                                                {salesforceBootcamp[0].review}                                        
                                            </p>
                                        </div>  
                                    </div>
                                    :
                                    <div className="first-review-wrapper">
                                        <div className="first-review">
                                            <h4 id="review-author">anonymous</h4>
                                            <p id="review-date">  </p>
                                            <p id="review-pros" style={{width: "100%", textAlign: "left", fontSize: "80%"}}>
                                            <span style={{color: "green"}}>PROS: </span>  
                                                
                                            </p>
                                            <p id="review-pros" style={{width: "100%", textAlign: "left", fontSize: "80%"}}>
                                                <span style={{color: "darkred"}}>CONS: </span>     
                                                    
                                            </p>
                                            <p id="review-pros" style={{width: "100%", textAlign: "left", fontSize: "80%"}}>
                                                <span style={{color: "gray"}}>Year graduated: </span>     
                                                
                                            </p>
                                            <p id="review-text">
                                                no reviews yet    
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
                                <p className="review-overall"><span id="overall-review-text">Overall: </span> 4.85/5 ({cloudgateacademyreviewCount} reviews)</p>
                                <p id="bootcamp-definition-text"> { CLOUDGATEACADEMY_DEFINITION } </p>
                                <p id="bootcamp-definition"><span id="bootcamp-highlight">{ MODE }:</span> onsite, online</p>
                                <p id="bootcamp-definition"><span id="bootcamp-highlight">{ ITBACKGROUND }:</span> not required</p>
                                <p id="bootcamp-definition"><span id="bootcamp-highlight">{ LOCATION }:</span> Chicago, online</p>
                                <p id="bootcamp-definition"><span id="bootcamp-highlight">{ DURATION }:</span> 4 month</p>
                                <p id="bootcamp-definition"><span id="bootcamp-highlight">{ PRICE }:</span> 6K total  </p>
                            </div>
                            {
                                cloudgateacademyreviewCount > 0 ?
                            <div className="first-review-wrapper">
                                <div className="first-review" key={cloudgateAcademy[0]._id}>
                                    <h4 id="review-author">anonymous</h4>
                                    <p id="review-date"> {cloudgateAcademy[0].date} </p>
                                    <p id="review-pros" style={{width: "100%", textAlign: "left", fontSize: "80%"}}>
                                    <span style={{color: "green"}}>PROS: </span>  
                                        {cloudgateAcademy[0].pros}    
                                    </p>
                                    <p id="review-pros" style={{width: "100%", textAlign: "left", fontSize: "80%"}}>
                                        <span style={{color: "darkred"}}>CONS: </span>     
                                        {cloudgateAcademy[0].cons}    
                                    </p>
                                    <p id="review-pros" style={{width: "100%", textAlign: "left", fontSize: "80%"}}>
                                        <span style={{color: "gray"}}>Year graduated: </span>     
                                        {cloudgateAcademy[0].dateGraduated}    
                                    </p>
                                    <p id="review-text">
                                        {cloudgateAcademy[0].review}    
                                    </p>
                                </div>
                        </div>
                        :
                        <div className="first-review-wrapper">
                            <div className="first-review">
                                <h4 id="review-author">anonymous</h4>
                                <p id="review-date">  </p>
                                <p id="review-pros" style={{width: "100%", textAlign: "left", fontSize: "80%"}}>
                                <span style={{color: "green"}}>PROS: </span>  
                                    
                                </p>
                                <p id="review-pros" style={{width: "100%", textAlign: "left", fontSize: "80%"}}>
                                    <span style={{color: "darkred"}}>CONS: </span>     
                                        
                                </p>
                                <p id="review-pros" style={{width: "100%", textAlign: "left", fontSize: "80%"}}>
                                    <span style={{color: "gray"}}>Year graduated: </span>     
                                    
                                </p>
                                <p id="review-text">
                                    no reviews yet    
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
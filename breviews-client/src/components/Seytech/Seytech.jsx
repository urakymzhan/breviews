import React from 'react';
import Header from '../B_Molecules/Header.jsx';
import Footer from '../B_Molecules/Footer.jsx';
import '../../style/style.css';
import { withRouter } from 'react-router';
import ReviewSubmitForm from '../B_Molecules/ReviewSubmitForm.jsx';
import ReviewsBox from '../B_Molecules/ReviewsBox.jsx';
import SortReviews from '../A_Atoms/SortReviews.jsx';
import { EMPTY_REVIEW_TEXT } from '../constants';
// import Select from 'react-select'; use this later


class Seytech extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let { data, name, review, cons, pros, dateGraduated } = this.props.data;
        let { handleSubmit, handleChange } = this.props;
        // providing school name
        let sName = 'seytech';
         // getting only related reviews 
        let seytechData = [];
        data.map((obj) => {
            if (obj.schoolname === sName) {
                seytechData.push(obj);
            }
        })
        // console.log("seytechData: ", seytechData);
        return (
            <div className="reviews-page-wrapper">
                <Header />               
                <div className="reviews-content-wrapper" >
                    <div className="reviews-header">
                        <h2>SEYTECH SCHOOL <span id="reviews-header-span">REVIEWS</span></h2>
                    </div>
                    <div className="write-review-btn">
                        <span>Write a review</span>
                    </div>
                    
                    <SortReviews/>

                    {/*  REVIEWS START */}
                    <div className="customer-reviews">
                        {
                            seytechData.length === 0 
                            ? 
                                <div>
                                    <h3 id="empty-review-text"> { EMPTY_REVIEW_TEXT } </h3>
                                </div>
                            :
                            <ReviewsBox reviewsData={seytechData}/>
                        }
                    </div>
                    {/*  REVIEWS END */}

                    <ReviewSubmitForm 
                        handleSubmit={handleSubmit}
                        handleChange={handleChange}
                        sName={sName}
                        name ={name} 
                        review ={review} 
                        cons={cons} 
                        pros={pros} 
                        dateGraduated={dateGraduated}
                    />
                </div>
            </div>
          )
    }

}

export default withRouter(Seytech);
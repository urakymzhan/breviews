import React from 'react';
import Header from '../B_Molecules/Header.jsx';
import Footer from '../B_Molecules/Footer.jsx';
import '../../style/style.css';
import ReviewSubmitForm from '../B_Molecules/ReviewSubmitForm.jsx';
import ReviewsBox from '../B_Molecules/ReviewsBox.jsx';
import SortReviews from '../A_Atoms/SortReviews.jsx';
import { EMPTY_REVIEW_TEXT } from '../constants';

class SalesforceBootcamp extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let { data, name, review, cons, pros, dateGraduated } = this.props.data;
        let { handleSubmit, handleChange } = this.props;
        // providing school name
        let sName = 'salesforcebootcamp';
         // getting only related reviews 
        let salesforcebootcampData = [];
        data.map((obj) => {
            if (obj.schoolname === sName) {
                salesforcebootcampData.push(obj);
            }
        })
        console.log("salesforcebootcampData: ", salesforcebootcampData.length);

        return (
            <div className="reviews-page-wrapper">
                <Header />               
                <div className="reviews-content-wrapper" >
                    <div>
                        <h2>SALESFORCE BOOTCAMP <span id="reviews-header">REVIEWS</span></h2>
                    </div>
                    <SortReviews />
                    
                    {/*  REVIEWS START */}
                    <div className="customer-reviews">
                        {
                            salesforcebootcampData.length === 0 ? 
                                <div>
                                    <h3 id="empty-review-text">{ EMPTY_REVIEW_TEXT }</h3>
                                </div>
                            :
                            <ReviewsBox reviewsData={salesforcebootcampData}/>
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
                <Footer />
            </div>
          )
    }

}

export default SalesforceBootcamp;
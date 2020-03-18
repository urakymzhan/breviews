import React from 'react';
import Header from '../B_Molecules/Header.jsx';
import Footer from '../B_Molecules/Footer.jsx';
import '../../style/style.css';
import ReviewSubmitForm from '../B_Molecules/ReviewSubmitForm.jsx';
import ReviewsBox from '../B_Molecules/ReviewsBox.jsx';
import SortReviews from '../A_Atoms/SortReviews.jsx';
import { EMPTY_REVIEW_TEXT } from '../constants';

class CloudgateAcademy extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let { data, name, review, cons, pros, dateGraduated } = this.props.data;
        let { handleSubmit, handleChange } = this.props;
        // providing school name
        let sName = 'cloudgateacademy';

        // getting only related reviews  
        let cloudgateacademyData = [];
        data.map((obj) => {
            if (obj.schoolname === sName) {
                cloudgateacademyData.push(obj);
            }
        })
        console.log("cloudgateacademyData: ", cloudgateacademyData);

        return (
            <div className="reviews-page-wrapper">
                <Header />               
                <div className="reviews-content-wrapper" >
                    <div>
                        <h2>CLOUDGATE ACADEMY <span id="reviews-header">REVIEWS</span></h2>
                    </div>
                    <SortReviews />

                        {/*  REVIEWS START */}
                        <div className="customer-reviews">
                            {
                                cloudgateacademyData.length === 0 
                                ? 
                                    <div>
                                        <h3 id="empty-review-text"> { EMPTY_REVIEW_TEXT } </h3>
                                    </div>
                                :
                                <ReviewsBox reviewsData={cloudgateacademyData}/>
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

export default CloudgateAcademy;
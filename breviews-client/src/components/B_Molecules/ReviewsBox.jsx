import React from 'react'
import '../../style/style.css';


export default function ReviewsBox(props) {
    
    const { reviewsData } = props;
    
    return (
        reviewsData.map((user) => {
            return (
                <div className="review-wrapper" key={user._id}>
                    <h4 id="review-author">anonymous</h4>
                    <p id="review-date"> {user.date} </p>
                    <p id="review-pros">
                    <span>PROS: </span>  
                        {user.pros}    
                    </p>
                    <p id="review-cons" >
                        <span>CONS: </span>     
                        {user.cons}    
                    </p>
                    <p id="year-graduated">
                        <span>Year graduated: </span>     
                        {user.dateGraduated}    
                    </p>
                    <p id="review-text">
                        {user.review}    
                    </p>
                </div>
            )
        })
    )
}
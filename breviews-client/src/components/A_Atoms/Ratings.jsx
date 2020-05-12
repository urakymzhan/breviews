
import React from 'react'
import Rating from "react-rating";

const Ratings = ({ classname, overall}) => {
    return (
        <Rating
            className={classname}
            start={0}
            stop={5}
            fractions={2}
            placeholderRating={overall}
            emptySymbol={
            <img
                id="rating-empty-star-main"
                src="../../public/assets/rating-off.png"
            />
            }
            placeholderSymbol={
            <img
                id="rating-full-star-main"
                src="../../public/assets/rating-on.png"
            />
            }
            readonly
      />
    )
}
export default Ratings;
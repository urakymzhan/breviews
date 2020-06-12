
import React from 'react'
import Rating from "react-rating";
import fullLogo from '../../../public/assets/full-circle.svg';
import emptyLogo from '../../../public/assets/empty-circle.svg';

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
                src={emptyLogo}
            />
            }
            placeholderSymbol={
            <img
                id="rating-full-star-main"
                src={fullLogo}
            />
            }
            readonly
      />
    )
}
export default Ratings;
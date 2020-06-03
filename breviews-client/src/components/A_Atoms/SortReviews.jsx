import React from 'react'
// use this later similar to Avatar

const SortReviews = props => {
    return (
        <div style={{textAlign: "right", margin: "0", alignSelf: "end"}}>
            <span>Sort by: </span>
            <select className="sortby-reviews">
                <option value="newest">Newest</option>
                <option value="newest">Oldest</option>
                <option value="highestrating">Highest rating</option>
                <option value="lowestrating">Lowest rating</option>
            </select>
        </div>
    )
}

export default SortReviews;

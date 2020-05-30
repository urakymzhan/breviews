import React from 'react'

export default function SortReviews() {
    return (
        // temporary, look for react-select library
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



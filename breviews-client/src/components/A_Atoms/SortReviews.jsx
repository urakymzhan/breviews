import React from 'react'
import '../../style/style.css';


export default function SortReviews() {
    return (
        // temporary look 
        // looks for react-select library
        <div style={{margin: "10px 0", textAlign: "right", clear: "both"}}>
            <span style={{fontSize: "82%"}} >Sort by: </span>
            <select className="sortby-reviews" style={{border: "none"}}>
                <option value="newest">Newest</option>
                <option value="highestrating">Highest rating</option>
                <option value="lowestrating">Lowest rating</option>
            </select>
        </div>
    )
}

// use this:
//   -webkit-appearance: none;
//   -moz-appearance: none;
//   appearance: none; 

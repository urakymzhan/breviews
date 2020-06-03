import React from 'react';
// setup to use for all our logo on different pages

const Avatar = props => {
    return(
        <div className = {`avatar ${props.className}`} style={props.style}>
            <img
                src={props.image}
                alt={props.alt}
                // optional
                style={{width: props.width, height: props.height}}
            />
        </div>
    )
}
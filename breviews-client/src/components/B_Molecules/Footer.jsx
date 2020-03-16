import React from 'react';

const Footer = () => {
    return (
        <footer style={main}>
            <p>All Rights Reserved</p>
            <p>© 2020</p>
        </footer>
    )
}

export default Footer;


// STYLES:
const main = {
    background: "rgb(56, 73, 89)",
    padding: "5px",
    color: "#fff",
    position: "absolute",  
    bottom: "0",
    width: "100%"
}
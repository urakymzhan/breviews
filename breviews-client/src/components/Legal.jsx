import React from 'react';
import {
  Link
} from "react-router-dom";
import Header from './Header.jsx';

const Legal = () => {
    return (
      <div>
        <Header />
        <div style={{width: "40%", margin: "100px auto", boxShadow: "0 0 40px gray", padding: "2rem", borderRadius: "5px", backgroundColor: "#fff"}}>
          <h3>Statement</h3>
          <p>This platform uses 100% trusted user reviews and data from around the country/world. We check every review in details. Requiring extra 
            steps before leaving the them. This makes sure that reviews left are out of manupilation and third party interference.
          </p>
        </div>
        <footer>
                <p>All Rights Reserved</p>
                <p>© 2020</p>
        </footer>
      </div>
    )
}

export default Legal;
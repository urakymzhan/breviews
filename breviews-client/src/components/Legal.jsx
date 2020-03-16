import React from 'react';
import Header from './B_Molecules/Header.jsx';
import Footer from './B_Molecules/Footer.jsx';

const Legal = () => {
    return (
      <div className="legal-wrapper">
        <Header />
        <div style={{width: "40%", margin: "100px auto", boxShadow: "0 0 40px gray", padding: "2em", borderRadius: "5px", backgroundColor: "#fff"}}>
          <h3>Statement</h3>
          <p>This platform uses 100% trusted user reviews and data from around the country/world. We check every review in details. Requiring extra 
            steps before leaving the them. This makes sure that reviews left are out of manupilation and third party interference.
          </p>
          <h3>Disclaimer</h3>
          <p>
            If you are a company that has concerns regarding information provided please feel free to contact us directly for resolution.
          </p>
        </div>
        <Footer />
      </div>
    )
}

export default Legal;
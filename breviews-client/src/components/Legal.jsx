import React from 'react';
import {
  Link
} from "react-router-dom";

const Legal = () => {
    return (
      <div>
        <header>
                <nav id="header-nav">
                    <ul id="logo-wrapper">
                        <li id="header-logo"><Link to="/"><img id="brlogo" src="./public/assets/brlogo3.png"/></Link></li>
                    </ul>
                    <ul id="tc-wrapper">
                        <li id="header-team">
                            <Link to="/team">Team</Link>
                        </li>
                        <li id="header-contact">
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li id="header-legal">
                            <Link to="/legal">Legal</Link>
                        </li>   
                    </ul>
                </nav>       
        </header>
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
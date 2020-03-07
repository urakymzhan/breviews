import React from 'react';
import {
  Link
} from "react-router-dom";

const Team = () => {
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
        <div>
          <div style={{padding: "50px 10px", display: "flex"}}>

            <div style={{width: "45%"}}>
              <div>
                <img className="team-img" src="../../public/assets/ulan.png" alt="Ulan Rakymzhanov" style={imgStyle}/>
              </div>
              <div style={{width: "auto"}}>
                <h1 style={{fontSize: "100%"}}> Ulan Rakymzhanov</h1>
                <p style={{fontSize: "80%", color: "gray"}}>Person who tries to make world a better place to live</p>
            </div>
            </div>
            <hr />
            <div style={{width: "45%"}}>
              <div>
                <img className="team-img" src="../../public/assets/tynar.jpeg" alt="Tynarbek Arzymatov" style={imgStyle}/>
              </div>
              <div style={{ width: "auto" }}>
                <h1 style={{fontSize: "100%"}} >Tynarbek Arzymatov</h1>
                <p style={{fontSize: "80%", color: "gray"}} >Person who makes things happen</p>
            </div>
            </div>
          </div>
        </div>
        <footer>
                <p>All Rights Reserved</p>
                <p>© 2020</p>
        </footer>
      </div>
    )
}

let imgStyle = {
  height: "200px",
  width: "200px",
  borderRadius: "100%"
}
export default Team;
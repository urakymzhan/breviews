import React from 'react';
import Header from './B_Molecules/Header.jsx';
import Footer from './B_Molecules/Footer.jsx';

const Team = () => {
    return (
      <div className="team-wrapper">
        <Header />
        <div>
          <div style={{padding: "100px 10px", display: "flex"}}>

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
        <Footer />
      </div>
    )
}

export default Team;


// STYLES:
let imgStyle = {
  height: "200px",
  width: "200px",
  borderRadius: "100%"
}
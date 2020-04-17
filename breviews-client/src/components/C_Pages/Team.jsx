import React from "react";
import Footer from "../B_Molecules/Footer.jsx";

const Team = () => {
  return (
    <div className="team-wrapper" style={teamWrapper}>
      
        <div style={{ marginBottom: "2em"}}>
          <p >We are a team who loves what they do</p>
          <hr style={{width: "30%"}}/>
        </div>

      <div style={{display: "flex", justifyContent: "space-evenly"}}>
        <div>
          <div>
            <img
              className="team-img"
              src="/public/assets/ulan3.jpg"
              alt="Ulan Rakymzhanov"
              style={imgStyle}
            />
          </div>
          <div>
          <p>ULAN RAKYMZHANOV<br />
              <span style={{ color: "gray", fontSize: "10px" }}>
                Founder
              </span>
              </p>
          </div>
        </div>
        <div>
          <div>
            <img
              className="team-img"
              src="https://www.seytech.co/images/users/marat.jpg"
              alt="Tynarbek Arzymatov"
              style={imgStyle}
            />
          </div>
          <div>
            <p>MARAT GAIPOV<br />
              <span style={{ color: "gray", fontSize: "10px" }}>
                Advisor
                <br />
                - Engineer at Amazon -
              </span>
              </p>
          </div>
        </div>
      </div>
      <hr style={{width: "30%"}}/>
      <div>
        <p>Special thanks to our interns and contributors</p>
        <p>Bob Smith: <span style={{color: "gray"}}>https://linkedin/bob-smith</span></p>
      </div>
      <Footer />
    </div>
  );
};

export default Team;

// STYLES:
const teamWrapper = {
  position: "relative",
  margin: "0",
  padding: "40px 0 100px 0",
  minHeight: "100%",
  textAlign: "center"
};

let imgStyle = {
  height: "100px",
  width: "100px",
  // borderRadius: "100%",
  margin: "0.8em"
};

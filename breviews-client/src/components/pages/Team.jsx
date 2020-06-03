import React from "react";
import './style/team.scss';

const Team = () => {
  return (
    <div className="team-wrapper">
      
        <div style={{ marginBottom: "2em"}}>
          <p >We are a team who loves what they do</p>
          <hr style={{width: "30%"}}/>
        </div>

      <div style={{display: "flex", justifyContent: "space-evenly"}}>
        <div>
          <div>
            <img
              src="/public/assets/ulan3.jpg"
              alt="Ulan Rakymzhanov"
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
              src="https://www.seytech.co/images/users/marat.jpg"
              alt="Marat Gaipov"
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
    </div>
  );
};

export default Team;



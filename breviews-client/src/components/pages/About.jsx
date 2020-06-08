import React from "react";
import './style/about.scss';

const About = () => {
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
              height="50px"
              width="50px"
              style={{borderRadius: "100%"}}
            />
          </div>
          <div>
          <p>Ulan Rakymzhanov<br />
              <span style={{ color: "gray", fontSize: "10px" }}>
                Founder
              </span>
              </p>
          </div>
        </div>
        <div>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRP8ZRhJ_aLb4ieqFUC9jEEuaPPubXlTMy99kfbURSBO_tdcQZs&usqp=CAU"
              alt="Marat Gaipov"
              height="50px"
              width="50px"
              style={{borderRadius: "100%"}}
            />
          </div>
          <div>
            <p>Christopher Arellano<br />
              <span style={{ color: "gray", fontSize: "10px" }}>
                Product Manager/Designer
                <br />
                - Freelancer -
              </span>
              </p>
          </div>
        </div>
        <div>
          <div>
            <img
              src="https://www.seytech.co/images/users/marat.jpg"
              alt="Marat Gaipov"
              height="50px"
              width="50px"
              style={{borderRadius: "100%"}}
            />
          </div>
          <div>
            <p>Marat Gaipov<br />
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
        <p>Azamat Rashidbekov: <span style={{color: "gray"}}>https://linkedin/azamat-rashidbekov</span></p>
        <p>Makhabat Maksatbekova: <span style={{color: "gray"}}>https://linkedin/makhabat-maksatbekova</span></p>
        <p>Askar Zholdoshev: <span style={{color: "gray"}}>https://linkedin/askar-zholdoshev</span></p>
      </div>
    </div>
  );
};

export default About;



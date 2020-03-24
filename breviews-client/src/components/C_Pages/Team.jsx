import React from "react";
import Footer from "../B_Molecules/Footer.jsx";

const Team = () => {
  return (
    <div className="team-wrapper" style={teamWrapper}>
      <div
        style={{
          padding: "0.8em"
        }}
      >
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
            <h2> Ulan Rakymzhanov</h2>
            <p style={{ color: "gray" }}>
              Founder
              <br />
              <span> - Freelancer - </span>
            </p>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            padding: "0.8em"
          }}
        >
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
              <h2>Marat Gaipov</h2>
              <p style={{ color: "gray" }}>
                Advisor
                <br />
                <span> - Engineer at Amazon - </span>
              </p>
            </div>
          </div>

          <div>
            <div>
              <img
                className="team-img"
                src="/public/assets/tynar.jpeg"
                alt="Tynarbek Arzymatov"
                style={imgStyle}
              />
            </div>
            <div>
              <h2>Tynarbek Arzymatov</h2>
              <p style={{ color: "gray" }}>
                Advisor
                <br />
                <span> - Engineer at Oracle - </span>
              </p>
            </div>
          </div>
        </div>
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
  minHeight: "100%"
};

let imgStyle = {
  height: "100px",
  width: "100px",
  borderRadius: "100%"
};

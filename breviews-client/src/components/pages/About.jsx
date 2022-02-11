import React from "react";
import "./style/about.scss";
import { Helmet } from "react-helmet";
import chris from "../../../public/assets/chris.jpeg";
import ulan from "../../../public/assets/ulan2.jpg";

const About = () => {
  return (
    <div className="team-wrapper">
      <Helmet>
        <title>About</title>
      </Helmet>
      <div className="team-header">
        <h1>WHAT WE DO</h1>
        <br />
        <h5>
          Bootcamp Avenue is a team of professionals on a mission. Our team
          created a space for people who looking for honest review on their next
          bootcamp. And others who want to share their experience of studying at
          a bootcamp. We want people to find a place that fit their needs. We
          did research for you and picked the Best Bootcamps with Real feedback
          from Real students.
        </h5>
        <br />
        <hr />
      </div>

      <div className="leader-board">
        <div>
          <div>
            <img src={ulan} alt="Ulan Rakymzhanov" />
          </div>
          <div>
            <p>
              Ulan Rakymzhanov
              <br />
              <span>
                Founder
                <br />- Freelancer -
              </span>
            </p>
          </div>
        </div>
        <div>
          <div>
            <img src={chris} alt="Chris Arellano" />
          </div>
          <div>
            <p>
              Christopher Arellano
              <br />
              <span>
                Product Manager/Designer
                <br />- Freelancer -
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

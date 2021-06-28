import React from "react";
import './style/about.scss';
import {Helmet} from "react-helmet";
import chris from '../../../public/assets/chris.jpeg';
import ulan from '../../../public/assets/ulan2.jpg';

const About = () => {
  return (
    <div className="team-wrapper">
      <Helmet>
          <title>About</title>
        </Helmet>
        <div className="team-header">
          <h5>Team who loves what they do</h5>
          <hr/>
        </div>

      <div className="leader-board">
        <div>
          <div>
            <img
              src={ulan}
              alt="Ulan Rakymzhanov"
            />
          </div>
          <div>
          <p>Ulan Rakymzhanov<br />
              <span>
                Founder
                <br />
                - Freelancer -
              </span>
              </p>
          </div>
        </div>
        <div>
          <div>
            <img
              src={chris}
              alt="Chris Arellano"
            />
          </div>
          <div>
            <p>Christopher Arellano<br />
              <span>
                Product Manager/Designer
                <br />
                - Freelancer -
              </span>
              </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;



import React from "react";
import './style/about.scss';
import instagram from '../../../public/assets/instagram.png';
import facebook from '../../../public/assets/facebook.png';
import linkedin from '../../../public/assets/linkedin.png';
import {Helmet} from "react-helmet";
import chris from '../../../public/assets/chris.jpeg';
import ulan from '../../../public/assets/ulan2.jpg';
import marat from '../../../public/assets/marat.jpg';

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
        <div>
          <div>
            <img
              src={marat}
              alt="Marat Gaipov"
            />
          </div>
          <div>
            <p>Marat Gaipov<br />
              <span>
                Advisor
                <br />
                - Engineer at Amazon -
              </span>
              </p>
          </div>
        </div>
      </div>
      <div className="team-contributors">
        <h6>Special thanks to our interns and contributors</h6>
        <hr/>
        <div className="team-contributors-names">
        <a href="https://www.linkedin.com/in/azamatrashidbekov/" target="_blank"><p>Azamat Rashidbekov <img src={linkedin} alt="linkedin icon"/></p></a>
        <a href="https://linkedin.com/makhabat-maksatbekova" target="_blank"><p>Makhabat Maksatbekova <img src={linkedin} alt="linkedin icon"/></p></a>
        <a href="https://www.linkedin.com/in/askar-zholdoshev-6b9a641aa/" target="_blank"><p>Askar Zholdoshev <img src={linkedin} alt="linkedin icon"/></p></a>
        </div>
      </div>
      <div className="team-reach-us">
        <p>Want to contribute, plese reach out to us!</p>
        <div className="team-icons">
          <a href="https://www.linkedin.com/in/ulan-rakymzhanov/" target="_blank"><img src={linkedin} alt="linkedin icon"/></a>
          <a href="https://www.facebook.com/ulan13" target="_blank"><img src={facebook} alt="facebook icon"/></a>
          <a href="https://www.instagram.com/u_rakymzhan/" target="_blank"><img src={instagram} alt="instagram icon"/></a>
        </div>
      </div>
    </div>
  );
};

export default About;



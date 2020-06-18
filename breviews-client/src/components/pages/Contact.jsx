import React from "react";
import "./style/contact.scss";
import instagram from "../../../public/assets/instagram.png";
import facebook from "../../../public/assets/facebook.png";
import linkedin from "../../../public/assets/linkedin.png";
import { Helmet } from 'react-helmet';
class Contact extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="contact-page-wrapper">
        <Helmet>
          <title>Contact</title>
        </Helmet>
        <div className="contact-block">
          <h3>Don't be a stranger</h3>
          <h5>just say hello.</h5>
          <p>
            Feel free to get in touch with us! We are always ready to assist or
            listen to your concerns.
          </p>
          <br />
          <p className="c-highlight">Email us at</p>
          <p className="email-itself">bootcampAvenue@gmail.com </p>
          <p className="c-highlight">- or -</p>
          <p>If you encounter any bugs feel free to contact us to get fixed</p>
          <div className="team-reach-us"></div>
          <div className="contact-team-icons">
            <a
              href="https://www.linkedin.com/in/ulan-rakymzhanov/"
              target="_blank"
            >
              <img src={linkedin} alt="linkedin icon" />
            </a>
            <a href="https://www.facebook.com/ulan13" target="_blank">
              <img src={facebook} alt="facebook icon" />
            </a>
            <a href="https://www.instagram.com/u_rakymzhan/" target="_blank">
              <img src={instagram} alt="instagram icon" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;

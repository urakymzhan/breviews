import React from "react";
import { Link } from 'react-router-dom';

const Legal = () => {
  return (
    <div className="legal-wrapper" style={legalWrapperStyle}>
      <section style={sectionStyle}>
        <h3>Privacy Policy</h3>
        <p>
          This section will help you understand what information we collect, <br />
           and how you can update, and delete your information.
        </p>
        <p>
          If you are regular user who left review or any other information on this platform. <br />
          And want to remove, update a particular data please reach out on <Link to="contact">contact us</Link> page.<br />
          We will carefully check for validity of request and thus perform right action.<br />
        </p>
        <p>
          The same policy applies to companies. <br />
          If your company's information, policy, has changed or if you believe that your information provided in this platoform is incorrect. <br /> 
          Please reach out on <Link to="contact">contact us</Link> page. We will carefully check for validity of request and thus perform right action.
        </p>
      </section>
      <section style={sectionStyle}>
        <h3> Terms of Service </h3>
        <p>
          When you use our service you fully committed to provide a trusted source of information.<br />
          Any detected falsy information or spam action will be removed without any notice.
        </p> 
      </section>
    </div>
  );
};

export default Legal;

// STYLES:
const legalWrapperStyle = {
  textAlign: "left",
  fontFamily: "Roboto,arial,sans-serif",
  fontSize: "12px"
};

const sectionStyle = {
  padding: "4em 6em"
};

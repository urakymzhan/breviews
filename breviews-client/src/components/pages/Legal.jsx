import React from "react";
import { Link } from "react-router-dom";
import "./style/legal.scss";
import { Helmet } from "react-helmet";

const Legal = () => {
  return (
    <div className="legal-wrapper">
      <Helmet>
        <title>Terms and Privacy</title>
      </Helmet>
      <section>
        <h3>Privacy Policy</h3>
        <p className="pre-disclaimer"><strong>bootcampAvenue is not an affiliate of any of these bootcamp or any other private company.</strong></p>
        <p>
          This section will help you understand what information we collect,{" "}
          <br />
          and how you can update, and delete your information.
        </p>
        <p>
          If you are regular user who left review or any other information on
          this platform. <br />
          And want to remove, update a particular data please reach out on{" "}
          <Link to="contact">contact us</Link> page.
          <br />
          We will carefully check for validity of request and thus perform right
          action.
          <br />
        </p>
        <p>
          The same policy applies to companies. <br />
          If your company's information, policy, has changed or if you believe
          that your information provided in this platoform is incorrect. <br />
          Please reach out on <Link to="contact">contact us</Link> page. We will
          carefully check for validity of request and thus perform right action.
        </p>
        <p>
          This policy might change accoridng to new features added to the website.<br/>
        </p>
      </section>
      <section>
        <h3> Terms of Service </h3>
        <p>
          When you use our service you fully committed to provide a trusted
          source of information.
          <br />
          Any detected falsy information or spam action will be removed without
          any notice.
        </p>
      </section>
      <section>
        <h3> Disclaimer </h3>
        <p>
          The materials on bootcampAvenue are provided on an 'as is' basis
          <br />
          Further, bootcampAvenue does not warrant or make any representations
          concerning the accuracy, likely results, or reliability of the use of
          the materials on its website or otherwise relating to such materials
          or on any sites linked to this site.
          <br/>
          We also don't guarantee to update any short term giveaways or any sort of discounts provided by each bootcamp.
          For that info please keep track of their own websites.
        </p>
      </section>
      <section>
        <h3> Accuracy of materials </h3>
        <p>
          The materials appearing in this website could include technical,
          typographical, or photographic errors. <br />
          bootcampAvenue does not warrant that any of the materials on its
          website are accurate, complete or current.
        </p>
      </section>
    </div>
  );
};

export default Legal;

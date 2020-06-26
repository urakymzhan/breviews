import React from "react";
import "./style/support.scss";
import { Tab } from "semantic-ui-react";
import weblink from "../../../public/assets/web-link.png";


const panes = [
    {
      menuItem: "Patreon",
      render: () => (
        <Tab.Pane attached={false}>
          {" "}
          <a href="https://www.patreon.com/user?u=35633615" target="_blank">
            Monthly subscription based
            <img src={weblink} alt="web link" />
          </a>
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Gofundme",
      render: () => (
        <Tab.Pane attached={false}>
          <a href="https://gf.me/u/x93tkd" target="_blank">
            One time support
            <img src={weblink} alt="web link" />
          </a>
        </Tab.Pane>
      ),
    },
  ];
  
const Support = () => {
  return (
    <div className="support-wrapper">
      <p>Thanks for vising this page</p>
      <h5>How would you like to support us? </h5>
      <Tab menu={{ pointing: true }} panes={panes} />
    </div>
  );
};

export default Support;



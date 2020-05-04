import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import { Team, Legal, Contact } from "../C_Pages";
import Bootcamp from "../Bootcamp/Bootcamp.jsx";

export default function Routes() {
  return (
    <Fragment>
      <Route path="/team" component={Team} />
      <Route path="/legal" component={Legal} />
      <Route path="/contact" component={Contact} />
      <Route path="/patreon" component={Contact} />
      <Route path="/blog" component={Contact} />
      <Route path="/bootcamps/:name" component={Bootcamp} />
      {/* <Route path="/write-review/:name/" component={ReviewForm} /> */}
      {/* <Route path="/write-review/" component={WriteReview} /> */}
    </Fragment>
  );
}

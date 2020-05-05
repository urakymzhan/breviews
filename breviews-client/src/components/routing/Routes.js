import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import { Team, Legal, Contact, ReviewFormPage, Results, Bootcamp, FormComplete } from "../pages";

export default function Routes() {
  return (
    <Fragment>
      <Route path="/team" component={Team} />
      <Route path="/legal" component={Legal} />
      <Route path="/contact" component={Contact} />
      <Route path="/patreon" component={Contact} />
      <Route path="/blog" component={Contact} />
      <Route path="/bootcamps/:name" component={Bootcamp} />
      <Route path="/write-review/:name" component={ReviewFormPage} />
      <Route path="/form-complete/:name" component={FormComplete} />
      <Route path="/results" component={Results} />
      <Route path="/results/:type" component={Results} />
    </Fragment>
  );
}

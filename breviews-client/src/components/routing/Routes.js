import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import { Team, Legal, Contact, ReviewFormPage, Results, Bootcamp, FormComplete, Landing, NotFoundPage } from "../pages";

export default function Routes() {
  return (
    <Fragment>
      <Route exact path="/" component={Landing} />
      <Route exact path="/team" component={Team} />
      <Route exact path="/legal" component={Legal} />
      <Route exact path="/contact" component={Contact} />
      {/* <Route exact path="/patreon" component={Contact} /> */}
      <Route exact path="/blog" component={Blog} />
      <Route path="/bootcamps/:name" component={Bootcamp} />
      <Route path="/write-review/:name" component={ReviewFormPage} />
      <Route path="/form-complete/:name" component={FormComplete} />
      <Route path="/results" component={Results} />
      {/* <Route path="/results/:type" component={Results} /> */}
      {/* fix this */}
      <Route component={NotFoundPage}/>
    </Fragment>
  );
}


function Blog() {
  return (
    <div>Welcome to Blog Page</div>
  )
}
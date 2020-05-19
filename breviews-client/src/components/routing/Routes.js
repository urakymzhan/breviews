import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import { Team, Legal, Contact, ReviewFormPage, Results, Bootcamp, FormComplete, Landing, Blog, NotFoundPage } from "../pages";

const Routes = () => {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" >
          <Landing />
        </Route>
        <Route exact path="/team" >
          <Team />
        </Route>
        <Route exact path="/legal" >
          <Legal />
        </Route>
        <Route exact path="/contact" >
          <Contact />
        </Route>
        <Route exact path="/blog">
          <Blog />
        </Route>
        <Route path="/bootcamps/:name">
          <Bootcamp />
        </Route>
        {/* TODO: nested url without base /write-review path */}
        <Route path="/write-review/:name">
          <ReviewFormPage />
        </Route>
        <Route path="/form-complete/:name">
          <FormComplete />
        </Route>
        <Route exact path="/results">
          <Results />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default Routes;

{/* <Route path="/results/:type" component={Results} /> */}
{/* fix this */}
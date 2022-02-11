import React, { Fragment, lazy } from "react";
import { Route, Switch } from "react-router-dom";
// import { About, Legal, Contact, ReviewFormPage, Results, Bootcamp, FormComplete, Landing, NotFoundPage } from "../pages";

// React.lazy currently only supports default exports !!!
const Support = lazy(() => import("../pages/Support.jsx"));
const About = lazy(() => import("../pages/About.jsx"));
const Legal = lazy(() => import("../pages/Legal.jsx"));
const Contact = lazy(() => import("../pages/Contact.jsx"));
const FormComplete = lazy(() => import("../pages/FormComplete.jsx"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage.jsx"));
const ReviewFormPage = lazy(() => import("../pages/ReviewFormPage.jsx"));
const Results = lazy(() => import("../pages/Results.jsx"));
const Bootcamp = lazy(() => import("../pages/Bootcamp.jsx"));
const Landing = lazy(() => import("../pages/Landing.jsx"));
const Login = lazy(() => import("../pages/Login.jsx"));
const SignUp = lazy(() => import("../pages/SignUp.jsx"));

const Routes = () => {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/results">
          <Results />
        </Route>
        <Route exact path="/support">
          <Support />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/legal">
          <Legal />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route path="/bootcamps/:name">
          <Bootcamp />
        </Route>
        <Route path="/write-review/:name">
          <ReviewFormPage />
        </Route>
        <Route path="/form-complete/:name">
          <FormComplete />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </Fragment>
  );
};

export default Routes;

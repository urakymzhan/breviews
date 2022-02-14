import React, { Fragment, lazy } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// React.lazy currently only supports default exports !!!
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
const Profile = lazy(() => import("../pages/Profile.jsx"));

// TODO: temp fix
function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return localStorage.getItem("token") ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: {
                from: location,
                message: "Login to leave a review!",
              },
            }}
          />
        );
      }}
    />
  );
}

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
        {/* TODO: temp fix */}
        <PrivateRoute path="/write-review/:name">
          <ReviewFormPage />
        </PrivateRoute>
        <Route path="/form-complete/:name">
          <FormComplete />
        </Route>
        {/* TODO: temp fix */}
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </Fragment>
  );
};

export default Routes;

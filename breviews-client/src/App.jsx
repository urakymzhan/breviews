import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from "./components/routing/Routes";
import Header from "./components/B_Molecules/Header.jsx";
import Intro from "./components/A_Atoms/Intro.jsx";
import Landing from "./components/C_Pages/Landing.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {

    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route component={Routes} />
        </Switch>
      </Router>
    );
  }

export default App;

import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from "./components/routing/Routes";
import Header from "./components/B_Molecules/Header.jsx";
import Landing from "./components/C_Pages/Landing.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from '../src/redux/store';

const App = () => {

    return (
      <Provider store={store}>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route component={Routes} />
          </Switch>
        </Router>
      </Provider>
    );
  }

export default App;

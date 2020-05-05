import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from "./components/routing/Routes";
import { Header, Footer } from "./components/B_Molecules";
import { Landing } from "./components/pages";
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
          <Footer />
        </Router>
      </Provider>
    );
  }

export default App;

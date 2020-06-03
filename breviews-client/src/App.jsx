import React from "react";
import "./style/App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Routes from "./components/routing/Routes";
import { Header, Footer } from "./components/B_Molecules";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../src/redux/store";
import { ScrollToTop } from "./components/A_Atoms";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <ScrollToTop>
          <Header />
          <Switch>
            <Route component={Routes} />
          </Switch>
          <Footer />
        </ScrollToTop>
      </Router>
    </Provider>
  );
};

export default App;

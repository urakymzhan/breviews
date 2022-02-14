import React, { Suspense } from "react";
import "./style/App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Routes from "./components/routing/Routes";
import { Header, Footer } from "./components/B_Molecules";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../src/redux/store";
import { ScrollToTop, Spinner } from "./components/A_Atoms";

// Cookie is httpOnly (used for only server side auth)
// Thats why using localstorage

const App = () => {
  /* TODO: 
    const [isAuthenticated, setIsAuthenticated] = useState(
      localStorage.getItem("token") ? "yes" : "no"
    );
  */

  return (
    <Provider store={store}>
      <Router>
        <Suspense
          fallback={
            <div style={{ textAlign: "center" }}>
              <Spinner />
            </div>
          }
        >
          <ScrollToTop>
            <Header />
            <Switch>
              <Route
                render={(props) => <Routes {...props} />}
                // component={Routes}
              />
            </Switch>
            <Footer />
          </ScrollToTop>
        </Suspense>
      </Router>
    </Provider>
  );
};

export default App;

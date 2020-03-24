import React from "react";
import Routes from "./components/routing/Routes";
import Header from "./components/B_Molecules/Header.jsx";
import Landing from "./components/C_Pages/Landing.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataToPost: {},
      review: "",
      name: "",
      pros: "",
      cons: "",
      dateGraduated: "",
      schoolname: ""
    };
  }

  render() {
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
}

export default App;

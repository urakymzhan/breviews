import React, { Component } from 'react';
import Main from './components/Main.jsx';
import Team from './components/Team.jsx';
import Legal from './components/Legal.jsx';
import Contact from './components/Contact.jsx';

import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";


class Core extends Component {
    constructor(props) {
        super(props)
    this.state = {
        data: []
    }
}
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/team">
                        <Team />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route path="/legal">
                        <Legal />
                    </Route>
                    <Route exact path="/">
                        <Main />
                    </Route>
                </Switch>
            </Router>
        )
    }
}

export default Core;
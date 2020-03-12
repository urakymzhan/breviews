import React, { Component } from 'react';
import Main from './components/Main.jsx';
import Team from './components/Team.jsx';
import Legal from './components/Legal.jsx';
import Contact from './components/Contact.jsx';
import Seytech from './components/Seytech/Seytech.jsx';

import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";


class Core extends Component {
    //  Warning: Can't perform a React state update on an unmounted component
    // @babel/plugin-proposal-class-properties in package.json file was used to support for the experimental syntax.
    _isMounted = false;

    constructor(props) {
        super(props)
        this.state = {
            data: [],
            dataToPost: {},
            review: '',
            name: ''
        }
    }
    getData() {
        return fetch('http://localhost:3000/users/userlist',
        {
            method: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        })
        .then((response) => response.json())
        .then((responseData) => {
            if (this._isMounted == true) {
                return responseData;
            }
        })
        .catch(error => console.warn(error));
    }   
    // TODO: later proxy localhost on client side and just call /userlist extension
    componentDidMount() {
        this._isMounted = true;
        // IDK why but fetch return undefined data before returning actual data. TODO
        this.getData().then(result => { 
            // console.log(result)
            if (result !== undefined) 
            { this.setState({ data: result })} 
        }) 
        }
    componentWillUnmount() {
        this._isMounted = false;
    }

    handleChange = e => {
        // e.preventDefault();
        let target = e.target;
        let value = target.value;
        let name = target.name;
        this.setState({ [name]: value });
    }
    
    handleSubmit = e => {
        // e.preventDefault();
        // document.location.reload(true)
        const reviewInput = this.state.review;
        const nameInput = this.state.name;
        // TODO: i will change this to more better Date library
        const today = new Date().toLocaleDateString("en-US");
        // object to post
        const dataToPost = { 
            review: reviewInput, 
            name: nameInput, 
            date: today 
        }
        let data = this.state.data;
        data.push(dataToPost);
        if (reviewInput.length > 0) {
            fetch('http://localhost:3000/users/adduser', {
                method: 'POST',
                headers: {
                            "Content-type": "application/json; charset=UTF-8"
                        },
                body: JSON.stringify(dataToPost)
            })
            .then(() => {
                this.setState ({
                    data: data,
                    reviewInput: '', 
                    nameInput: '', 
                    dataToPost: {} 
                })
            })
        }
    }   


    render() {
         // IDK why but fetch return 2 empty [] before returning actual data. TODO
        //  console.log("check: ", this.state.data)
        if (this.state.data.length > 0 ) {
            return (
                <Router>
                    <Switch>
                        <Route path="/team">
                            <Team />
                        </Route>
                        <Route path="/contact">
                            <Contact 
                                data={this.state}
                            />
                        </Route>
                        <Route path="/legal">
                            <Legal />
                        </Route>
                        <Route path="/seytech">
                            <Seytech 
                                data={this.state}
                                handleSubmit={this.handleSubmit}
                                handleChange={this.handleChange}
                            />
                        </Route>
                        <Route exact path="/">
                            <Main 
                                data={this.state}
                                handleSubmit={this.handleSubmit}
                                handleChange={this.handleChange}
                            />
                        </Route>
                    </Switch>
                </Router>
            )
        }
        else {
            return ( <h1 style={{margin: "100px auto"}}>Loading...</h1>)
        }
    }
}

export default Core;
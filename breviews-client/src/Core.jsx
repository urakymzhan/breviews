import React, { Component } from 'react';
import Main from './components/Main.jsx';
import Team from './components/Team.jsx';
import Legal from './components/Legal.jsx';
import Contact from './components/Contact.jsx';
import Seytech from './components/Seytech/Seytech.jsx';
import Cybertek from './components/Cybertek/Cybertek.jsx';
import CloudAcademy from './components/CloudAcademy/CloudgateAcademy.jsx';
import SalesforceBootcamp from './components/SalesforceBootcamp/SalesforceBootcamp.jsx';
import Header from './components/B_Molecules/Header.jsx';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
  import { css } from "@emotion/core";
  import RotateLoader from "react-spinners/ClipLoader";
  

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
            name: '',
            pros: '',
            cons: '',
            dateGraduated: '',
            schoolname: '',
            // animation
            loading: true,
            

        }
        // this.state = {
        //     data: {
        //         seytech: [],
        //         cybertek: [],
        //         salesforcebootcamp: [],
        //         cloudgateacademy: [],
        //     },
        //     dataToPost: {},
        //     review: '',
        //     name: '',
        //     pros: '',
        //     cons: '',
        //     dateGraduated: '',
        //     // animation
        //     loading: true
        // }
    }
    getData() {
         // TODO: later proxy localhost on client side and just call /userlist extension
        return fetch('http://localhost:3000/users/reviewlist',
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
   
    componentDidMount() {
        this._isMounted = true;
        this.getData().then(result => { 
            // console.log(result)
            if (result !== undefined) 
            { this.setState({ data: result })} 
        }) 
        }
    componentWillUnmount() {
        this._isMounted = false;
    }
    handleChange = (e, sName ) => {
        // e.preventDefault();
        console.log(sName);
        let target = e.target;
        let value = target.value;
        let name = target.name;
        this.setState({ [name]: value, schoolname: sName });
    }    
    handleSubmit = e => {
        // e.preventDefault();
        // document.location.reload(true)
        const reviewInput = this.state.review;
        const nameInput = this.state.name;
        const prosInput = this.state.pros;
        const consInput = this.state.cons;
        const dateGraduatedInput = this.state.dateGraduated;
        const schoolname = this.state.schoolname;
        // TODO: i will change this to more better Date library
        const today = new Date().toLocaleDateString("en-US");
        // object to post
        const dataToPost = { 
            review: reviewInput, 
            name: nameInput, 
            date: today,
            pros: prosInput,
            cons: consInput,
            dateGraduated: dateGraduatedInput,
            schoolname: schoolname
        }
        let data = this.state.data;
        // pushing new object to whole data in state
        data.push(dataToPost);
        if (reviewInput.length > 0) {
            fetch('http://localhost:3000/users/addreview', {
                method: 'POST',
                headers: {
                            "Content-type": "application/json; charset=UTF-8"
                        },
                body: JSON.stringify(dataToPost)
            })
            .then(() => {
                this.setState ({
                    data: data,
                    review: '', 
                    name: '', 
                    pros: '',
                    cons: '',
                    dateGraduated: '',
                    dataToPost: {}, 
                    schoolname: ''
                })
            })
        }
    }   
    render() {
         // IDK why but fetch return 2 empty [] before returning actual data. TODO
         console.log("check: ", this.state.data)
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
                        {/* another design solution instead of using many routes for each school */}
                        {/* <Route path="/bootcamps/:id">
                            <Seytech 
                                data={this.state}
                                handleSubmit={this.handleSubmit}
                                handleChange={this.handleChange}
                            />
                        </Route>         */}
                        <Route path="/seytech">
                            <Seytech 
                                data={this.state}
                                handleSubmit={this.handleSubmit}
                                handleChange={this.handleChange}
                            />
                        </Route>
                        <Route path="/cybertek">
                            <Cybertek 
                                data={this.state}
                                handleSubmit={this.handleSubmit}
                                handleChange={this.handleChange}
                            />
                        </Route>
                        <Route path="/cloudgateacademy">
                            <CloudAcademy 
                                data={this.state}
                                handleSubmit={this.handleSubmit}
                                handleChange={this.handleChange}
                            />
                        </Route>
                        <Route path="/salesforcebootcamp">
                            <SalesforceBootcamp 
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
            return ( 
                <Router> 
                    <Route>
                        <Header />
                        <h1 style={{marginTop: "100px", fontSize: "60%"}}>fetching data</h1>
                        <div className="sweet-loading">
                            <RotateLoader
                            css={override}
                            size={100}
                            color={"#123abc"}
                            loading={this.state.loading}
                            />
                        </div>
                     </Route>
                </Router>  
                )
        }
    }
}

export default Core;



// STYLES:
const override = css`
display: block;
margin: 10px auto;
border-color: black;
`;
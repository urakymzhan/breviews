import React from 'react';
import {
  Link
} from "react-router-dom";
import styled from 'styled-components';

const Header = () => {
    return (
        <HEADER>
                <Nav id="header-nav">
                    <Ul id="logo-wrapper">
                        <li id="header-logo"><Link to="/"><img id="brlogo" src="./public/assets/brlogo3.png" style={{width: "auto", height: "40px"}}/></Link></li>
                    </Ul>
                    <Ul>
                        <li id="header-team" style={lists}>
                            <Link to="/team" style={links}>Team</Link>
                        </li>
                        <li id="header-contact" style={lists}>
                            <Link to="/contact" style={links}>Contact</Link>
                        </li>
                        <li id="header-legal" style={{ float: "left", marginRight: "1.2em", marginRight: "0"}}>
                            <Link to="/legal" style={links}>Legal</Link>
                        </li>   
                    </Ul>
                </Nav>       
        </HEADER>
    )
}

export default Header;


// styled components styles:
const HEADER = styled.header`{
    background: #f2f2f2;
    padding: 5px 20px;
    // boxShadow: 0 5px 5px -5px rgb(56, 73, 89);
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 9999;
}`
const Ul = styled.ul` {
    list-style: none;
    padding: 0;
    height: 40px;
    line-height: 40px;
    font-size: 100%;
}`
const Nav = styled.nav` {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
}`
// regular styles
const lists = {
    float: "left",
    marginRight: "1.2em"
}
const links =  {
    textDecoration: "none",
    color: "inherit"
}
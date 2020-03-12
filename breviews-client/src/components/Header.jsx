import React from 'react';
import {
  Link
} from "react-router-dom";

const Header = () => {
    return (
        <header>
                <nav id="header-nav">
                    <ul id="logo-wrapper">
                        <li id="header-logo"><Link to="/"><img id="brlogo" src="./public/assets/brlogo3.png"/></Link></li>
                    </ul>
                    <ul id="tc-wrapper">
                        <li id="header-team">
                            <Link to="/team">Team</Link>
                        </li>
                        <li id="header-contact">
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li id="header-legal">
                            <Link to="/legal">Legal</Link>
                        </li>   
                    </ul>
                </nav>       
        </header>
    )
}

export default Header;
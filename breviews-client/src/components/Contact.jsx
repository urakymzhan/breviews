import React from 'react';
import {
  Link
} from "react-router-dom";

const Contact = () => {
    return (
      <div>
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
      <div style={{ margin: "10%"}}>
        <form>
          <ul>
            <li>
              <label for="name">Name:</label>
              <input type="text" id="name" name="user_name" />
            </li>
            <li>
              <label for="mail">E-mail:</label>
              <input type="email" id="mail" name="user_mail" />
            </li>
            <li>
              <label for="msg">Message:</label>
              <textarea id="msg" name="user_message"></textarea>
            </li>
          </ul>
        </form>
      </div>
      <footer>
              <p>All Rights Reserved</p>
              <p>© 2020</p>
      </footer>
    </div>
    )
}

export default Contact;
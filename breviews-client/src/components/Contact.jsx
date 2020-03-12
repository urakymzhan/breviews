import React from 'react';
import {
  Link
} from "react-router-dom";

class Contact extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   fetch('http://localhost:3000/users/adduser', {
  //     method: 'POST',
  //     headers: {
	// 			"Content-type": "application/json; charset=UTF-8"
	// 		},
	// 		body: JSON.stringify({
  //       review: 'Testing',
  //       fullname: 'Test',
  //       age: '27',
  //       location: "MC", 
  //       gender: "male"
	// 		})
  //   })
  // }
  render() {
    // let { data } = this.props.data;
    // console.log(data)
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
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="user_name" />
            </li>
            <li>
              <label htmlFor="mail">E-mail:</label>
              <input type="email" id="mail" name="user_mail" />
            </li>
            <li>
              <label htmlFor="msg">Message:</label>
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
}

export default Contact;
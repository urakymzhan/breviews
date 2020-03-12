import React from 'react';
import Header from './Header.jsx';

class Contact extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

    return (
      <div>
        <Header />
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
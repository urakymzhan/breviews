import React from "react";
import './style/contact.scss';
import { Footer } from '../B_Molecules';

class Contact extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="contact-page-wrapper">
          <form>
            <ul>
              <li>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  placeholder="Name..."
                />
              </li>
              <li>
                <input
                  type="email"
                  id="mail"
                  name="user_mail"
                  placeholder="Email..."
                />
              </li>
              <li>
                <textarea
                  id="msg"
                  name="user_message"
                  placeholder="Mesage..."
                ></textarea>
              </li>
              <li>
                <button id="submit" name="submit">
                  Submit
                </button>
              </li>
            </ul>
          </form>
      </div>
    );
  }
}

export default Contact;


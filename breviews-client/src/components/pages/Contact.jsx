import React from "react";
import './style/contact.scss';
class Contact extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="contact-page-wrapper">
        <div>
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
      </div>
    );
  }
}

export default Contact;


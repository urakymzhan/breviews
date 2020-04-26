import React from "react";
class Contact extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="contact-page-wrapper" style={contactPageWrapper}>
        <div>
          <form style={form}>
            <ul style={ul}>
              <li>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  style={inputstyle}
                  placeholder="Name..."
                />
              </li>
              <li>
                <input
                  type="email"
                  id="mail"
                  name="user_mail"
                  style={inputstyle}
                  placeholder="Email..."
                />
              </li>
              <li>
                <textarea
                  id="msg"
                  name="user_message"
                  style={textarea}
                  placeholder="Mesage..."
                ></textarea>
              </li>
              <li>
                <button id="submit" name="submit" style={buttonstyle}>
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

// STYLES
const contactPageWrapper = {
  padding: "200px 30px",
  background:
    "URL('https://images.unsplash.com/photo-1491183672482-d0af0e44929d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80')",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover"
};
const form = {
  textAlign: "left",
  width: "400px",
  padding: "0.8em",
  fontSize: "10px"
};
const ul = {
  listStyle: "none",
  padding: "0",
  margin: "0"
};
const inputstyle = {
  outline: "none",
  border: "none",
  width: "100%",
  padding: "0.8em",
  marginBottom: "0.8em",
  border: "thin solid #e5e5e5",
  borderRadius: "4px"
};
const textarea = {
  outline: "none",
  border: "none",
  width: "100%",
  padding: "0.8em",
  minHeight: "5em",
  marginBottom: "0.8em",
  border: "thin solid #e5e5e5",
  borderRadius: "4px",
  verticalAlign: "top",
  resize: "none"
};
const buttonstyle = {
  outline: "none",
  border: "none",
  width: "100%",
  padding: "0.4em",
  marginBottom: "0.8em",
  border: "thin solid #ed4b82",
  borderRadius: "4px",
  background: "#ed4b82",
  color: "#fff",
  fontSize: "12px",
  textTransform: "uppercase"
};
// input:focus,
// textarea:focus {
//   /* Additional highlight for focused elements */
//   border-color: #000;
// }

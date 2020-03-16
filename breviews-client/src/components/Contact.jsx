import React from 'react';
import Header from './B_Molecules/Header.jsx';
import Footer from './B_Molecules/Footer.jsx';

class Contact extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

    return (
      <div>
        <Header />
        <div style={{ margin: "10%"}}>
          <form style={form}>
            <ul style={ul}>
              <li>
                <label htmlFor="name" style={label}>Name:</label>
                <input type="text" id="name" name="user_name" style={inputextarea} />
              </li>
              <li>
                <label htmlFor="mail" style={label}>E-mail:</label>
                <input type="email" id="mail" name="user_mail" style={inputextarea} />
              </li>
              <li>
                <label htmlFor="msg" style={label}>Message:</label>
                <textarea id="msg" name="user_message" style={inputextarea}></textarea>
              </li>
            </ul>
          </form>
        </div>
        <Footer />
    </div>
    )
  }
}

export default Contact;


// STYLES

const form = {
  margin: "0 auto",
  width: "400px",
  padding: "1em",
  border: "1px solid #CCC",
  borderRadius: "1em"
}

const ul = {
  listStyle: "none",
  padding: "0",
  margin: "0"
}

// form li + li {
//   margin-top: 1em;
// }

const label = {
  display: "inline-block",
  width: "90px",
  textAlign: "right"
}
const inputextarea = {
  font: "1em sans-serif",
  width: "300px",
  boxSizing:" border-box",
  border: "1px solid #999",
  outline: "none"
}
// input:focus, 
// textarea:focus {
//   /* Additional highlight for focused elements */
//   border-color: #000;
// }

// textarea {
//   /* Align multiline text fields with their labels */
//   vertical-align: top;

//   /* Provide space to type some text */
//   height: 5em;
// }

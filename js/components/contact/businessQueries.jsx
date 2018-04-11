import React from "react";

export default class BusinessQueries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sent: false
    };
  }

  formSendHandler = event => {
    event.preventDefault();
    this.setState({
      sent: true
    });
  };

  render() {
    if (this.state.sent) {
      return (
        <div className="page-contact__business confirmation">
          <h1 className="page-contact__confirmation">MESSAGE SENT</h1>
          <br />
          <p>Stanisław will write you back ASAP</p>
        </div>
      );
    } else {
      return (
        <div className="page-contact__business">
          <h1>BUSINESS QUERIES</h1>
          <div>
            <span>IMPRESARIO / Stanisław Gregor / +48 667 882 721</span>
          </div>
          <form action="submit">
            <div>
              <select name="title" id="title">
                <option value="" disabled selected>
                  Title
                </option>
                <option value="Mr.">Mr.</option>
                <option value="Mrs.">Mrs.</option>
              </select>
              <input type="text" name="first-name" placeholder="First name" />
            </div>
            <div>
              <input type="text" name="last-name" placeholder="Last name" />
              <input type="email" name="email" placeholder="E-mail" />
            </div>
            <textarea name="message" id="message" cols="30" rows="10" />
            <input type="submit" value="SEND" onClick={this.formSendHandler} />
          </form>
        </div>
      );
    }
  }
}

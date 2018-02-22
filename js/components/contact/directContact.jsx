import React from "react";

class Icon extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="footer__icon">
        <a href={this.props.href} target="_blank">
          <i className={this.props.faClass} />
        </a>
      </div>
    );
  }
}

export default class DirectContact extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="page-contact__direct">
        <h1>CONTACT ME DIRECTLY</h1>
        <div className="footer__icons">
          <Icon
            href="https://www.facebook.com/marlenaglosinska"
            faClass="fab fa-facebook-f"
          />

          <Icon
            href="https://www.instagram.com/marlenaglosinska/"
            faClass="fab fa-instagram"
          />

          <Icon
            href="https://www.linkedin.com/in/marlena-g%C5%82osi%C5%84ska-2635a5159/"
            faClass="fab fa-linkedin-in"
          />

          <Icon
            href="https://twitter.com/marlenaseeyou"
            faClass="fab fa-twitter"
          />
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
          <input type="submit" value="SEND" />
        </form>
      </div>
    );
  }
}

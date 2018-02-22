import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Link, Switch, NavLink } from "react-router-dom";
import Nav from "../components/nav.jsx";
import Footer from "../components/footer.jsx";

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="page-contact">
        <Nav />
        <div className="section__title">
          <span>CONTACT</span>
        </div>
        <div className="page-contact__main">
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
              <input type="submit" value="SEND" />
            </form>
          </div>
          <div className="page-contact__direct">
            <h1>CONTACT ME DIRECTLY</h1>
            <div className="footer__icons">
              <div className="footer__icon">
                <a
                  href="https://www.facebook.com/marlenaglosinska"
                  target="_blank"
                >
                  <i className="fab fa-facebook-f" />
                </a>
              </div>

              <div className="footer__icon">
                <a
                  href="https://www.instagram.com/marlenaglosinska/"
                  target="_blank"
                >
                  <i className="fab fa-instagram" />
                </a>
              </div>
              <div className="footer__icon">
                <a
                  href="https://www.linkedin.com/in/marlena-g%C5%82osi%C5%84ska-2635a5159/"
                  target="_blank"
                >
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>

              <div className="footer__icon">
                <a href="https://twitter.com/marlenaseeyou" target="_blank">
                  <i className="fab fa-twitter" />
                </a>
              </div>
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
        </div>
        <Footer />
      </div>
    );
  }
}

import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Link, Switch, NavLink } from "react-router-dom";

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <footer>
        <div className="footer__copyright">
          <span>Design by Stanislaw Gregor &copy; All rights reserved</span>
        </div>
        <div className="footer__logo">
          <span>MG</span>
        </div>
        <div className="footer__icons">
          <div className="footer__icon">
            <i className="fab fa-facebook-f" />
          </div>
          <div className="footer__icon">
            <i className="fab fa-youtube" />
          </div>
          <div className="footer__icon">
            <i className="fab fa-instagram" />
          </div>
          <div className="footer__icon">
            <i className="fab fa-linkedin-in" />
          </div>
          <div className="footer__icon">
            <i className="fab fa-snapchat-ghost" />
          </div>
          <div className="footer__icon">
            <i className="fab fa-twitter" />
          </div>
        </div>
      </footer>
    );
  }
}

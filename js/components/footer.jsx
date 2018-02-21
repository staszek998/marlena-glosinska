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
          <span>
            Design by{" "}
            <a href="https://www.linkedin.com/in/stanislaw-gregor?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BpgokmYfnSmSd31%2FTgQAaug%3D%3D" target='_blank' >
              Stanislaw Gregor
            </a>{" "}
            &copy; All rights reserved
          </span>
        </div>
        <div className="footer__logo">
          <span>MG</span>
        </div>
        <div className="footer__icons">
          <div className="footer__icon">
            <a href="https://www.facebook.com/marlenaglosinska" target="_blank">
              <i className="fab fa-facebook-f" />
            </a>
          </div>
          <div className="footer__icon">
            <a
              href="https://www.youtube.com/user/MarlenaLoveJB"
              target="_blank"
            >
              <i className="fab fa-youtube" />
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
            <a href="https://www.snapchat.com/" target="_blank">
              <i className="fab fa-snapchat-ghost" />
            </a>
          </div>
          <div className="footer__icon">
            <a href="https://twitter.com/marlenaseeyou" target="_blank">
              <i className="fab fa-twitter" />
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

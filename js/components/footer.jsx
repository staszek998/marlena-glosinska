import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Link, Switch, NavLink } from "react-router-dom";

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
            <a
              href="https://www.linkedin.com/in/stanislaw-gregor?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BpgokmYfnSmSd31%2FTgQAaug%3D%3D"
              target="_blank"
            >
              Stanislaw Gregor
            </a>{" "}
            &copy; All rights reserved
          </span>
        </div>
        <div className="footer__logo">
          <Link to='/'>MG</Link>
        </div>
        <div className="footer__icons">
          <Icon
            href="https://www.facebook.com/marlenaglosinska"
            faClass="fab fa-facebook-f"
          />
          <Icon
            href="https://www.youtube.com/user/MarlenaLoveJB"
            faClass="fab fa-youtube"
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
            href="https://www.snapchat.com/"
            faClass="fab fa-snapchat-ghost"
          />
          <Icon
            href="https://twitter.com/marlenaseeyou"
            faClass="fab fa-twitter"
          />
        </div>
      </footer>
    );
  }
}

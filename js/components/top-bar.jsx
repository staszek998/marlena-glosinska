import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Link, Switch, NavLink } from "react-router-dom";

class Icon extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="top-bar__icon">
        <a href={this.props.href} target="_blank">
          <i className={this.props.faClass} />
        </a>
      </div>
    );
  }
}

export default class TopBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="top-bar">
        <div className="top-bar__content">
          <span className="top-bar__text">FIND ME ON</span>

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
      </div>
    );
  }
}

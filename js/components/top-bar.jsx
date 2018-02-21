import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Link, Switch, NavLink } from "react-router-dom";

export default class TopBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="top-bar">
        <div className="top-bar__content">
          <span className="top-bar__text">FIND ME ON</span>

          <div className="top-bar__icon">
            <a href="https://www.facebook.com/marlenaglosinska" target="_blank">
              <i className="fab fa-facebook-f" />
            </a>
          </div>
          <div className="top-bar__icon">
            <a href="https://www.youtube.com/user/MarlenaLoveJB" target="_blank">
              <i className="fab fa-youtube" />
            </a>
          </div>
          <div className="top-bar__icon">
            <a href="https://www.instagram.com/marlenaglosinska/" target="_blank">
              <i className="fab fa-instagram" />
            </a>
          </div>
          <div className="top-bar__icon">
            <a href="https://www.linkedin.com/in/marlena-g%C5%82osi%C5%84ska-2635a5159/" target="_blank">
              <i className="fab fa-linkedin-in" />
            </a>
          </div>
          <div className="top-bar__icon">
            <a href="https://www.snapchat.com/" target="_blank">
              <i className="fab fa-snapchat-ghost" />
            </a>
          </div>
          <div className="top-bar__icon">
            <a href="https://twitter.com/marlenaseeyou" target="_blank">
              <i className="fab fa-twitter" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

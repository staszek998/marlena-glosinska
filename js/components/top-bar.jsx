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
            <i className="fab fa-facebook-f" />
          </div>
          <div className="top-bar__icon">
            <i className="fab fa-youtube" />
          </div>
          <div className="top-bar__icon">
            <i className="fab fa-instagram" />
          </div>
          <div className="top-bar__icon">
            <i className="fab fa-linkedin-in" />
          </div>
          <div className="top-bar__icon">
            <i className="fab fa-snapchat-ghost" />
          </div>
        </div>
      </div>
    );
  }
}

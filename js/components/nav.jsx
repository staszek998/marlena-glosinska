import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Link, Switch, NavLink } from "react-router-dom";

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <nav className="nav">
        <div className="nav__menu-left">
          <ul>
            <li>
              <Link to="/music">MUSIC</Link>
            </li>
            <li>
              <Link to="/photos">PHOTOS</Link>
            </li>
          </ul>
        </div>
        <div className="nav__logo">
          <Link to="/home">MG</Link>
        </div>
        <div className="nav__menu-right">
          <ul>
            <li>
              <Link to="/videos">VIDEOS</Link>
            </li>
            <li>
              <Link to="/contact">CONTACT</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

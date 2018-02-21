import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Link, Switch, NavLink } from "react-router-dom";
import Nav from "../components/nav.jsx";


export default class Videos extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div className="page-videos">
          <Nav />
        </div>
      );
    }
  }
  
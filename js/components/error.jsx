import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Link, Switch, NavLink } from "react-router-dom";

export default class Error extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="error">
        <h1>Error 404: website not found</h1>
      </div>
    );
  }
}

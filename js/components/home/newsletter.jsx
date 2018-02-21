import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Link, Switch, NavLink } from "react-router-dom";

export default class Newsletter extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section className="newsletter">
        <div className="newsletter__cols">
          <div className="newsletter_col" />
          <form action="submit">
            <h1>LET'S STAY IN TOUCH</h1>
            <select name="title" id="title">
              <option value="" disabled selected>
                Title
              </option>
              <option value="Mr.">Mr.</option>
              <option value="Mrs.">Mrs.</option>
            </select>
            <input type="text" name="first-name" placeholder="First name" />
            <input type="text" name="last-name" placeholder="Last name" />
            <input type="email" name="email" placeholder="E-mail" />
            <input type="submit" value="SIGN UP" />
          </form>
          <div className="newsletter_col" />
        </div>
      </section>
    );
  }
}

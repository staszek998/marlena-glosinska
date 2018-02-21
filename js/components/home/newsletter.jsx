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
        <form action="submit">
          <h1>LET'S STAY IN TOUCH</h1>
          <select name="title" id="title" >
            <option value="" disabled selected >
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
        <div className="vertical-line" />
        <div className="newsletter__about">
          <h1>GET TO KNOW ME</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
            commodi numquam, ea veniam quibusdam eos nihil iste explicabo facere
            consequatur. Doloremque beatae labore fuga laboriosam laborum soluta
            nesciunt dolorum deserunt!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
            commodi numquam, ea veniam quibusdam eos nihil iste explicabo facere
            consequatur. Doloremque beatae labore fuga laboriosam laborum soluta
            nesciunt dolorum deserunt!
          </p>
        </div>
      </section>
    );
  }
}

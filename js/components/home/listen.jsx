import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Link, Switch, NavLink } from "react-router-dom";

export default class Listen extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section className="listen">
        <iframe
          src="https://open.spotify.com/embed?uri=spotify:artist:6Vh6UDWfu9PUSXSzAaB3CW&theme=white"
          width="300"
          height="360"
          frameBorder="none"
          allowTransparency="true"
        />
        <div>
            <span>IN CASE</span>
            <span>YOU'RE HERE</span>
            <span>JUST TO LISTEN</span>
        </div>
        <iframe
          src="https://open.spotify.com/embed?uri=spotify:user:spotify:playlist:37i9dQZF1DZ06evO45P0Eo&theme=white"
          width="300"
          height="360"
          frameBorder="0"
          allowTransparency="true"
        />
      </section>
    );
  }
}

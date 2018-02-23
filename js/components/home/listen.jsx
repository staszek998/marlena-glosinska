import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Link, Switch, NavLink } from "react-router-dom";
import MediaQuery from "react-responsive";

export default class Listen extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section className="listen">
        <h1 className="section-header">IN CASE YOU'RE HERE JUST TO LISTEN</h1>
        <MediaQuery query="(max-width: 1224px)">
          <iframe
            src="https://open.spotify.com/embed?uri=spotify:user:11164081692:playlist:6dqFiHECXIyGXBAVUvaB1L"
            width="600"
            height="80"
            frameBorder="0"
            allowTransparency="true"
            allow="encrypted-media"
          />
        </MediaQuery>
        <MediaQuery query="(min-device-width: 1224px)">
          <iframe
            src="https://open.spotify.com/embed/user/11164081692/playlist/6dqFiHECXIyGXBAVUvaB1L"
            width="523"
            height="360"
            frameBorder="0"
            allowTransparency="true"
          />
        </MediaQuery>
      </section>
    );
  }
}

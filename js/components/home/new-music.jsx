import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Link, Switch, NavLink } from "react-router-dom";

export default class NewMusic extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section className="new-music">
        <h1>CAN'T COME? I'VE GOT YOU COVERED</h1>
        <div className="new-music__albums">
          <div className="new-music__album">
            <div className="new-music__album-description">album name</div>
          </div>
          <div className="new-music__album">
            <div className="new-music__album-description">album name</div>
          </div>
          <div className="new-music__album">
            <div className="new-music__album-description">album name</div>
          </div>
          <div className="new-music__album">
            <div className="new-music__album-description">album name</div>
          </div>
        </div>
      </section>
    );
  }
}

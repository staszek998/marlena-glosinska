import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Link, Switch, NavLink } from "react-router-dom";

export default class LatestEvents extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section className="latest-events">
        <div className="latest-events__col">
          <div className="latest-events__event">
            <span>DATE</span>
            <span>VENUE</span>
            <span>NAME</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique sapiente dignissimos natus doloremque quaerat. Perferendis voluptate at dolores assumenda laboriosam non maiores, adipisci, veritatis dolorum beatae sit quas incidunt nisi?</p>
          </div>
        </div>
        <div className="latest-events__col">
          <div className="latest-events__event">event</div>
        </div>
        <div className="latest-events__col">
          <div className="latest-events__event">event</div>
        </div>
      </section>
    );
  }
}

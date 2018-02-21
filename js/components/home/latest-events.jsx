import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Link, Switch, NavLink } from "react-router-dom";

class Event extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="latest-events__event">
        <span>{this.props.date.toUpperCase()}</span>
        <span>{this.props.name.toUpperCase()}</span>
        <span>{this.props.venue.toUpperCase()}</span>
        <p>{this.props.description}</p>
        <button>LEARN MORE</button>
      </div>
    );
  }
}

export default class LatestEvents extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section className="latest-events">
        <div className="latest-events__col">
          <Event
            date="date"
            name="name"
            venue="venue"
            description="[DESCRIPTION] Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              sapiente dignissimos natus doloremque quaerat. Perferendis
              voluptate at dolores assumenda laboriosam non maiores, adipisci,
              veritatis dolorum beatae sit quas incidunt nisi?"
          />
        </div>
        <div className="latest-events__col">
          <Event
            date="12.12.2012"
            name="apocalypse"
            venue="stodoła, warsaw (pl)"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              sapiente dignissimos natus doloremque quaerat. Perferendis
              voluptate at dolores assumenda laboriosam non maiores, adipisci,
              veritatis dolorum beatae sit quas incidunt nisi?"
          />
        </div>
        <div className="latest-events__col">
          <Event
            date="09.10.2018"
            name="stan's birthday"
            venue="promenada, warsaw (pl)"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              sapiente dignissimos natus doloremque quaerat. Perferendis
              voluptate at dolores assumenda laboriosam non maiores, adipisci,
              veritatis dolorum beatae sit quas incidunt nisi?"
          />
        </div>
      </section>
    );
  }
}

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
        <h1 className='section-header' >COME AND SEE ME</h1>
        <div className="latest-events__events">
          <div className="latest-events__col">
            <Event
              date="15.04.2018"
              name="best voice of warsaw"
              venue="hard rock cafe warsaw"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              sapiente dignissimos natus doloremque quaerat. Perferendis
              voluptate at dolores assumenda laboriosam non maiores, adipisci,
              veritatis dolorum beatae sit quas incidunt nisi?"
            />
          </div>
          <div className="latest-events__col">
            <Event
              date="27.05.2018"
              name="fly-high 2k18"
              venue="tauron arena, cracow"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              sapiente dignissimos natus doloremque quaerat. Perferendis
              voluptate at dolores assumenda laboriosam non maiores, adipisci,
              veritatis dolorum beatae sit quas incidunt nisi?"
            />
          </div>
          <div className="latest-events__col">
            <Event
              date="05.07.2018"
              name="open'er festival 2018"
              venue="gdynia"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              sapiente dignissimos natus doloremque quaerat. Perferendis
              voluptate at dolores assumenda laboriosam non maiores, adipisci,
              veritatis dolorum beatae sit quas incidunt nisi?"
            />
          </div>
        </div>
      </section>
    );
  }
}

import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Link, Switch, NavLink } from "react-router-dom";
import Nav from "../components/nav.jsx";
import Footer from "../components/footer.jsx";


class Singles extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="section-music__singles">
        <span>SINGLES</span>
        <div className="section-music__singles__covers">
          <div className="singles__cover">
            <div className="singles__cover-description">single name</div>
          </div>
          <div className="singles__cover">
            <div className="singles__cover-description">single name</div>
          </div>
          <div className="singles__cover">
            <div className="singles__cover-description">single name</div>
          </div>
          <div className="singles__cover">
            <div className="singles__cover-description">single name</div>
          </div>
        </div>
      </div>
    );
  }
}

class Albums extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="section-music__albums">
        <span>ALBUMS</span>
        <div className="section-music__albums__covers">
          <div className="album__cover">
            <div className="album__cover-description">album name</div>
          </div>
          <div className="album__cover">
            <div className="album__cover-description">album name</div>
          </div>
          <div className="album__cover">
            <div className="album__cover-description">album name</div>
          </div>
          <div className="album__cover">
            <div className="album__cover-description">album name</div>
          </div>
        </div>
      </div>
    );
  }
}

class Eps extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="section-music__eps">
        <span>EPs</span>
        <div className="section-music__eps__covers">
          <div className="ep__cover">
            <div className="ep__cover-description">ep name</div>
          </div>
          <div className="ep__cover">
            <div className="ep__cover-description">ep name</div>
          </div>
          <div className="ep__cover">
            <div className="ep__cover-description">ep name</div>
          </div>
          <div className="ep__cover">
            <div className="ep__cover-description">ep name</div>
          </div>
        </div>
      </div>
    );
  }
}

class MusicComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section className="section-music">
        <div className="section-music__title">
          <span>MUSIC</span>
        </div>
        <Singles />
        <Albums />
        <Eps />
      </section>
    );
  }
}

export default class Music extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="page-home">
        <Nav />
        <MusicComponent />
        <Footer/>
      </div>
    );
  }
}

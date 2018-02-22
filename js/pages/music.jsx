import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Link, Switch, NavLink } from "react-router-dom";
import Nav from "../components/nav.jsx";
import Footer from "../components/footer.jsx";
import Singles from "../components/music/singles.jsx";
import Albums from "../components/music/albums.jsx";
import Eps from "../components/music/eps.jsx";

export default class Music extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="page-home">
        <Nav />
        <section className="section-music">
          <div className="section__title">
            <span>MUSIC</span>
          </div>
          <Singles />
          <Albums />
          <Eps />
        </section>
        <Footer />
      </div>
    );
  }
}

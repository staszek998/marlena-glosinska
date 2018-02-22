import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Link, Switch, NavLink } from "react-router-dom";
import Nav from "../components/nav.jsx";
import LatestEvents from "../components/home/latest-events.jsx";
import NewMusic from "../components/home/new-music.jsx";
import Listen from "../components/home/listen.jsx";
import Newsletter from "../components/home/newsletter.jsx";
import Footer from "../components/footer.jsx";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="page-home transition-item">
        <header />
        <Nav />
        <LatestEvents />
        <NewMusic />
        <Listen />
        <div className='compensator' ></div>
        <div className='newsletter-and-footer-container' >
          <Newsletter />
          <Footer />
        </div>
      </div>
    );
  }
}

import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Link, Switch, NavLink } from "react-router-dom";
import Nav from "../components/nav.jsx";
import Footer from "../components/footer.jsx";
import BusinessQueries from '../components/contact/businessQueries.jsx'
import DirectContact from '../components/contact/directContact.jsx'


export default class Contact extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="page-contact">
        <Nav />
        <div className="section__title">
          <span>CONTACT</span>
        </div>
        <div className="page-contact__main">
          <BusinessQueries />
          <DirectContact />
        </div>
        <Footer />
      </div>
    );
  }
}

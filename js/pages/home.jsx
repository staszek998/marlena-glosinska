import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Link, Switch, NavLink } from "react-router-dom";

class Header extends React.Component {
    constructor(props){
        super(props);
    };
    render(){
        return <header>
            
        </header> ;
    };
};

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='page-home' >
        <Header/>
        <nav>navigation</nav>
        <section>latest events</section>
        <section>new music</section>
        <section>listen</section>
        <section>newsletter</section>
        <footer></footer>
      </div>
    );
  }
}

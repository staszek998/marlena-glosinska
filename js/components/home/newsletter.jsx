import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Link, Switch, NavLink } from 'react-router-dom';

export default class Newsletter extends React.Component {
    constructor(props){
        super(props);
    };
    render(){
        return <section className='newsletter' >
            newsletter
        </section> ;
    };
};
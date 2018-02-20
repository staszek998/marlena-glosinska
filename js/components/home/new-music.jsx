import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Link, Switch, NavLink } from 'react-router-dom';

export default class NewMusic extends React.Component {
    constructor(props){
        super(props);
    };
    render(){
        return <section className='new-music' >
            new music
        </section> ;
    };
};
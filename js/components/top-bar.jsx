import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Link, Switch, NavLink } from 'react-router-dom';
 


export default class TopBar extends React.Component {
     constructor(props){
         super(props);
     };
     render(){
         return <div className='top-bar' >
            <span>TOP BAR</span>
         </div> ;
     };
 };
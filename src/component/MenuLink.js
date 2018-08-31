import React, { Component } from 'react';
import {Route,Link, } from 'react-router-dom';
export default function ({to,label}) {
    return (
        <Route path={to} children={(match)=>{
            return <li className={match?"active":"" +"nav-item nav-link"}><Link to = {to}>{label}</Link></li>
        }}/>
    )
}
import React, { Component } from 'react';
import {
    HashRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';
import Home from './Home.js';
import User from './User.js';
import Profile from './Profile.js';
import ProtectedRoute from "./ProtectedRoute";
import Login from "./Login";
import MenuLink from "./MenuLink";
import notFound from "./notFound";
import 'bootstrap/dist/css/bootstrap.css'
export default (
    <Router>
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#"> 用户管理系统</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ul className="navbar-nav">
                        {/* <MenuLink label="首页" to="/home"/>
                        <MenuLink label="用户管理" to="/user"/>
                        <MenuLink label="个人设置" to="/profile"/> */}
                        <li className="nav-item nav-link"><Link to="/home">首页</Link></li>
                        <li className="nav-item nav-link"><Link to="/user">用户管理</Link></li>
                        <li className="nav-item nav-link"><Link to="/profile">个人设置</Link></li>

                    </ul>
                </div>
            </nav>
            {/* <nav className="collapse navbar-collapse">
               <div className="container-fluid">
                   <div className="navbar-header">
                       <div className="navbar-brand">
                        用户管理系统
                       </div>
                   </div>
                   <ul className="navbar-nav mr-auto"> 
                   <li className="nav-item"><Link to="/home">首页</Link></li>
                   <li className="nav-item"><Link to="/user">用户管理</Link></li>
                   <li className="nav-item"><Link to="/profile">个人设置</Link></li>
                   </ul>
               </div>
            </nav> */}
            
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Switch>
                        <Route path="/" exact render={props=><div>首页</div>} />
                        {/* <Route path="/:name" render={props=><div>{props.match.params.name}</div>} /> */}
                        <Route path="/home" component={Home} />
                        <Route path="/user" component={User} />
                        {/* <Route path="/user" component={User} /> */}
                        <Route path="/login" component={Login} />
                        <ProtectedRoute path="/profile" component={Profile}/>
                        <Route  component={notFound} />
                        {/* <Route path="/profile" component={Profile} /> */}
                        </Switch>
                    </div>
                </div>
            </div>


        </div>
    </Router>
)
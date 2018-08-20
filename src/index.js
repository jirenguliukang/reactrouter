import React from 'react';
import ReactDOM from 'react-dom';
import {
   HashRouter as Router,
   Route
} from 'react-router-dom';
function Early (){
    return <h1>early</h1>
  }
function Home (){
  return <h1>Home</h1>
}
function User (){
    return <h1>User</h1>
}
function Profile (){
    return <h1>Profile</h1>
}

ReactDOM.render(<Router>
    <div>
        <Route path="/" component={Early} />
        <Route path="/home" component={Home} />
        <Route path="/user" component={User} />
        <Route path="/profile" component={Profile} />
    </div>
</Router>, document.getElementById('root')
);


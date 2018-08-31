import React, { Component } from 'react';
import {
    HashRouter as Router,
    Route,
    Link
} from 'react-router-dom';
class UserList extends Component {
    constructor(){
        super();
        this.state={users:[]}
    }
    componentWillMount(){
        let userStr = localStorage.getItem('users');
        let users =  userStr?JSON.parse(userStr):[];
        this.setState({users})
    }
    render() {
        return (
            <ul className="list-group">
              {
                  this.state.users.map(user=>(
                    <li className="list-group-item" key={user.id}>
                    <Link to={"/user/detail/"+user.id}>{user.name}</Link>
                </li>
                  ))
              }
 
            </ul>
        )
    }
}
export default UserList;
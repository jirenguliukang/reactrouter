import React, { Component } from 'react';
import  {Route,Link} from 'react-router-dom';
import UserList from "./UserList";
import UserAdd from "./UserAdd";
import UserDetail from "./UserDetail"

class User extends Component {
render() {
return (

<div className="row">
    <div className="col-lg-2">
      <ul className="nav flex-column">
         <li><Link to="/user/list"> 用户列表</Link>  </li>
         <li><Link to="/user/add">新增用户</Link>  </li>
      </ul>
    </div>
    <div className="col-lg-10">

      <Route path="/user/list" component={UserList}/>
      <Route path="/user/add" component={UserAdd}/>
      <Route path="/user/detail/:id" component={UserDetail}/>
    </div>
</div>

)
}
}
export default User;
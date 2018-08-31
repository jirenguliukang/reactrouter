import React, { Component } from 'react';
class UserDetail extends Component {
    render() {
        //history 跳转路由的路径
        //match 匹配结果 若匹配上就是对象 否则为null
        //location 当前路径 pathname当前路径
        console.log(this.props);
        let id = this.props.match.params.id;
        let userStr = localStorage.getItem("users");
        let users =  userStr?JSON.parse(userStr):[];
        let user = users.find(user=>user.id=id)
        return (
            <div>姓名：{user.name}
            </div>
        )
    }
}
export default UserDetail;
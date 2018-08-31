import { Route } from "react-router-dom";
import Redirect from "react-router-dom/Redirect";
import React, { Component } from 'react';
//当一个组件不需要装状态的时候可以用函数来声明
//当一个组件需要状态的时候必须用类来声明
//函数声明组件的时候参数是属性
export default function({component:Component,...rest}){
    return <Route {...rest} 
    render={(props)=>
        localStorage.getItem("login")?<Component/>:<Redirect to={
            {
                pathname:"/login",
                state:{from:props.location.pathname}
            }
        }/>
    }
    />

}
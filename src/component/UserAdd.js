import React, { Component } from 'react';
import  {Prompt} from 'react-router-dom';
class UserAdd extends Component {
    constructor(props){
        super(props);
        this.state={blocking:false}
    }
    handleChange=(event)=>{
        console.log(event.target.value);
        this.setState({
            blocking:event.target.value&&event.target.value.length>0
        })

    }
    handleSubmit=()=>{
          let name = this.name.value;
          let userStr = localStorage.getItem('users');
          // 转成对象数组
          let users =  userStr?JSON.parse(userStr):[];
          console.log(JSON.parse(userStr));
          users.push({id:Date.now(),name});
          localStorage.setItem('users',JSON.stringify(users));
        //   this.props.history.push('/user/list');
          this.setState({
              blocking:false
          },()=> {this.props.history.push('/user/list')})
    }
    render() {
        return (
            <div>
                <Prompt
                   when={this.state.blocking}
                   message={(location)=>`确定离开此页面,跳转到${location.pathname}`}/>
      
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">姓名</label>
                    <input type="text" className="form-control" onChange={this.handleChange} ref={ref=>this.name=ref} />
                </div>
                <div className="form-group">
                    <input type="submit" className="btn btn-primary" />
                </div>
            </form>
             </div>
        )
    }
}
export default UserAdd;
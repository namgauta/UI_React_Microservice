import React from 'react';
import Users from './UsersComponent'
import {browserHistory} from 'react-router'
import * as allActions from './actions/action';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import swal from 'sweetalert'
var SockJS=require('sockjs-client');
var Stomp=require('webstomp-client');
export default class AllUsers extends React.Component{
    componentDidMount(){
       

        var ws =SockJS("http://localhost:8018/trade");
              var client = Stomp.over(ws);
              client.connect({},function(f){
                    client.subscribe('/topic/userCreated', function (msg) {
                      var m=JSON.parse(msg.body)
                      swal(m.name, "User Created", "success")
                             
                    });
                 
              });
      }
    componentDidUpdate(prevProps){
        if(this.props.saveUsersData && this.props.saveUsersData!==prevProps.saveUsersData ){
            browserHistory.push('/')
        }
    }
    handleSubmit(event) {
        event.preventDefault()
        const data = new FormData(event.target);
        var user={
        'id':data.get('id'),
        'name':data.get('name'),
        'gender':data.get('gender'),
        'accNo':data.get('accNo')
       }
       var account={
        'accNo':data.get('accNo'),
        'balance':data.get('balance')
      }
  
      this.props.saveUsersData(user);
      this.props.saveAccountsData(account);
  }
    render(){
        var allUsers=this.props.myusers.map((u,index)=>{
            return <Users {...this.props} myusers={u} i={index}/> 
        })

        return <div>
            <h2 className=" btn btn-info btn-lg">All Users in Cart</h2>
            
            <div className="row">
            
            <div className="col-sm-7">
            <div className="col-sm-2"><h4>Id</h4></div>
            <div className="col-sm-3"><h4>Name</h4></div>
            <div className="col-sm-3"><h4>Gender</h4></div>
            <div className="col-sm-3"><h4>Account No.</h4></div>
            <div className="col-sm-1"><h4>Delete</h4></div>
            
            {allUsers}</div>
            <div className="col-sm-1"></div>
            <div className="col-sm-4">
            <div>
            <h1 className="btn btn-info btn-lg">New User Account Form</h1>
            <form  onSubmit={this.handleSubmit.bind(this)}>
            <fieldset>
             Id:             <input type="number" className="form-control" name="id" required />
             Name:           <input type="text" className="form-control" name="name" required /><br/>
             Gender:<br/>
             <input type="radio" name="gender" value="male" checked name="gender"/> Male
             <input type="radio" name="gender" value="female" name="gender"/> Female<br/><br/>

             Account number: <input type="number" className="form-control" name="accNo" required />
             Account balance:<input type="number" className="form-control" name="balance" required />
             <input type='submit' className="btn btn-primary " value='Create'/></fieldset>
             </form>
             </div>
            </div>
            </div>
            
        </div>
    }
}


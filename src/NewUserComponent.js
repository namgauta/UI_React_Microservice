import React from 'react';
import {browserHistory} from 'react-router'
import * as allActions from './actions/action';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import swal from 'sweetalert'
var SockJS=require('sockjs-client');
var Stomp=require('webstomp-client');

class NewUserC extends React.Component{
    componentDidMount(){
       

        var ws =SockJS("http://localhost:8018/trade");
              var client = Stomp.over(ws);
              client.connect({},function(f){
                    client.subscribe('/topic/tradeCreated', function (msg) {
                      var m=JSON.parse(msg.body)
                      swal(m.name, "User Created", "success")
                             
                    });
                 
              });
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
  componentDidUpdate(prevProps){
    if(this.props.saveUsersData && this.props.saveUsersData!==prevProps.saveUsersData ){
        browserHistory.push('/')
    }
}
    render(){
        return <div>
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
    }
}
function mapStateToProps(store){
    return{
        myusers:store.users,
        myaccounts:store.accounts

    }
}


var NewUser=connect(mapStateToProps,allActions)(NewUserC);
export default NewUser;
import React from 'react';
import {Link} from 'react-router';
import {browserHistory} from 'react-router'
import * as allActions from './actions/action';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
export default class Users extends React.Component{
    onSubmitDelete(e){
        this.props.deleteAccount(this.props.myusers.accNo)
        this.props.deleteUser(this.props.myusers.accNo)
    }
    componentDidUpdate(prevProps){
        if(this.props.deletetrade && this.props.deletetrade!==prevProps.deletetrade){
            browserHistory.push('/')
        }
    }
   
    render(){
        return <div className="row">
            <div className="col-sm-2">{this.props.myusers.id}</div>
            <div className="col-sm-3 btn btn-warning"><Link to={`/view/${this.props.myusers.id}`}>{this.props.myusers.name}</Link></div>
            <div className="col-sm-3">{this.props.myusers.gender}</div>
            <div className="col-sm-3">{this.props.myusers.accNo}</div>
            <div className="col-sm-1"><button href="#" className="btn btn-info " onClick={this.onSubmitDelete.bind(this)}><span className="glyphicon glyphicon-trash"></span> Trash </button></div>
            </div>
        
        
    }
}
function mapStateToProps(store){
    return{
        myusers:store.users,
        myaccounts:store.accounts

    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(allActions,dispatch)
}
var Apps=connect(mapStateToProps,mapDispatchToProps)(Users);
import React from 'react';
import AccData from './AccountDetailsComponent'
export default class UserData extends React.Component{


    render(){
        var accNo=this.props.userData.accNo
        var index=this.props.myaccounts.findIndex((a)=>{
            return (a.accNo==accNo);
        })
        var acc=this.props.myaccounts[index]
        return <div className=" btn btn-default">
            <div className=" btn btn-default">
            <div className="btn btn-info">
            <h1>Id:{this.props.userData.id}</h1><hr/></div>
            <h3>Name:{this.props.userData.name}</h3><hr/>
            <h3>Category:{this.props.userData.gender}</h3><hr/>
            <h3>Account Number:{this.props.userData.accNo}</h3><hr/>
            </div>
            <br/>
            <div className=" btn btn-default">
            <div className="btn btn-info">
            <h1>Account details</h1></div>
            <AccData {...this.props} accData={acc} i={index}/>
            </div>

        </div>
    }
}

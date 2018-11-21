import React from 'react';
import UserData from './UserDetailsComponent'
export default class Users extends React.Component{
    render(){
        var id =this.props.params.id;
        console.log("namnaaaaaaaaaaaaaaa"+id)
        console.log("namnaaaaaaaaaaaaaaa"+this.props.myusers)
        console.log("4444444444444444"+this.props.myaccounts)
        var index=this.props.myusers.findIndex((u)=>{
            return (u.id==id);
        })
        console.log("namnaaaaaaaaaaaaaaa"+index)
        var currUser=this.props.myusers[index];

        return <div>
            <UserData {...this.props} userData={currUser} i={index}/>
        </div>
    }
}
import React from 'react';

export default class AccData extends React.Component{

 
	
    render(){
        console.log("7777777777777777"+this.props.accData.accNo)
        return <div>
            <h3>Account Number:{this.props.accData.accNo}</h3>
            <h3>Account Balance:{this.props.accData.balance}</h3>
            <h3>Account Tax:{this.props.accData.tax}</h3>

        </div>
    }
}

import axios from 'axios';

export function fetchCarData(){
    console.log("fetching cars data")
    var request=axios.get('http://localhost:8091/user/users');
    return (dispatch)=>{
        request.then((response)=>{
            dispatch({type:'FETCH_USERS',users:response.data})

        })
    }
}

export function saveUsersData(user){
   
    var request=axios.post("http://localhost:8091/user/saveUser",user)
    return (dispatch)=>{
        request.then((response)=>{
            dispatch({type:'SAVE_USER',users:response.data})
        })
    }
}
export function saveAccountsData(account){
   
    var request=axios.post("http://localhost:8091/account/saveAccount",account)
    return (dispatch)=>{
        request.then((response)=>{
            dispatch({type:'SAVE_ACCOUNT',accounts:response.data})
        })
    }
}
export function fetchAccountsData(){
   
    var request=axios.get('http://localhost:8091/account/accounts');
    return (dispatch)=>{
        request.then((response)=>{
            console.log(response.data)
            dispatch({type:'FETCH_ACCOUNTS',accounts:response.data})

        })
    }
}
export function deleteUser(accNo){
    var request=axios.delete('http://localhost:8091/user/delete/'+accNo);
    return (dispatch)=>{
        request.then((response)=>{
            dispatch({type:'DELETING_USER',users:response.data})
        })
    }
}
export function deleteAccount(accNo){
    var request=axios.delete('http://localhost:8091/account/delete/'+accNo);
    return (dispatch)=>{
        request.then((response)=>{
            dispatch({type:'DELETING_ACCOUNT',accounts:response.data})
        })
    }
}
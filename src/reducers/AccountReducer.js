export default function accounts(state=[],action){
    switch(action.type){
        case 'FETCH_ACCOUNTS':
        return action.accounts

        case 'SAVE_ACCOUNT':
        return action.accounts

        case 'DELETING_ACCOUNT':  
        return action.accounts;

        default:
        return state;
    }
}
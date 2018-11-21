export default function users(state=[],action){
    switch(action.type){
        case 'FETCH_USERS':
        return action.users

        case 'SAVE_USER':
        return action.users
        
        case 'DELETING_USER':  
        return action.users;

        default:
        return state;
    }
}
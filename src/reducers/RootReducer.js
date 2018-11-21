import users from './UsersReducer';
import accounts from './AccountReducer'
import {combineReducers} from 'redux';

var rootReducer=combineReducers({
    users,
    accounts
})

export default rootReducer;
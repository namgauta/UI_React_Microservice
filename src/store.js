import {createStore,applyMiddleware} from 'redux';
import rootReducer from './reducers/RootReducer';
import thunk from 'redux-thunk';

var store =createStore(rootReducer,applyMiddleware(thunk));
export default store;
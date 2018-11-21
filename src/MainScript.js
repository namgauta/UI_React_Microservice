import App from './App';
import * as allActions from './actions/action';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

function mapStateToProps(store){
    return{
        myusers:store.users,
        myaccounts:store.accounts

    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(allActions,dispatch)
}
var Apps=connect(mapStateToProps,mapDispatchToProps)(App);
export default Apps;
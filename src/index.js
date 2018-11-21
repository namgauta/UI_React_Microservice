import React from 'react'
import { render } from 'react-dom'
import  {Route} from 'react-router'
import { Router } from 'react-router'
import {browserHistory} from 'react-router'
import { Provider } from 'react-redux'
import store from './store'
import Apps from './MainScript';
import AllUsers from './AllUsersComponent';
import {IndexRoute} from 'react-router'
import User from'./UserComponent'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


import NewUser from './NewUserComponent'
render(
    <Provider store={store}>
         <Router history={browserHistory} >
         <Route path='/' component={Apps}>
         <IndexRoute component={AllUsers}></IndexRoute>
         <Route path='/view/:id' component={User}></Route>
       
         </Route>
         </Router>
    </Provider>,
    document.getElementById("root")
)
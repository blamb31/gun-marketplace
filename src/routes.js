import React from 'react'
import {HashRouter as Router, Switch, Route} from 'react-router-dom'
import LandingPage from './Components/LandingPage/LandingPage'
import Login from './Components/Login/Login'
import Home from './Components/Home/Home'
import Register from './Components/Register/Register'
import TestPage from './Components/TestPage/TestPage'

export default (
    <Router>
        <Switch>
            <Route path='/' exact component={LandingPage} />
            <Route path='/login' component={Login} />
            <Route path='/home' component={Home} />
            <Route path='/testPage' component={TestPage} />
            <Route path='/register' component={Register} />

        </Switch>
    </Router>

)
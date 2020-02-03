import React from 'react'
import {Switch, Route} from 'react-router-dom'
import LandingPage from './Components/LandingPage/LandingPage'
import Dashboard from './Components/Dashboard/Dashboard'
import Login from './Components/Login/hookLogin'
import Form from './Components/Form/hookForm'
import BigPost from './Components/Post/BigPost'
import UserPage from './Components/UserPage/UserPage'


//Landing Page, Dashboard, Login Page, Register Page, Create/Edit Post
export default (
  <Switch>
    <Route exact path = '/' component={LandingPage} />
    <Route path = '/dashboard' component={Dashboard} />
    <Route path = '/login' title = 'Login' component={Login} />
    <Route exact path = '/form' component={Form} />
    <Route path = '/form/:id' component={Form} />
    <Route path = '/post/:id' component={BigPost} />
    <Route path = '/user/:id' component={UserPage} />
  </Switch>
)
import React from 'react'
import {Switch, Route} from 'react-router-dom'
import LandingPage from './Components/LandingPage/LandingPage'
import Dashboard from './Components/Dashboard/Dashboard'
import Login from './Components/Login/Login'
import Form from './Components/Form/Form'


//Landing Page, Dashboard, Login Page, Register Page, Create/Edit Post
export default (
  <Switch>
    <Route exact path = '/' component={LandingPage} />
    <Route path = '/dashboard' component={Dashboard} />
    <Route path = '/login' component={Login} />
    <Route exact path = '/form' component={Form} />
    <Route path = '/form/:id' component={Form} />
    {/* <Route path = 'register' component={Login} /> */}
    {/* <Route path = '' component={} /> */}
  </Switch>
)
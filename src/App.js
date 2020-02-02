import React from 'react';
import './App.css';
import routes from './routes'
import Header from './Components/Header/Header'
import {withRouter} from 'react-router-dom'

function App(props) {
  const {location} = props
  return (
    <div className="App">
      {location.pathname !== '/login' && <Header />}
      {routes}
    </div>
  );
}

export default withRouter(App)
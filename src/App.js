import React from 'react';
import './App.css';
import routes from './routes'
import Header from './Components/Header/Header'
import Sidebar from './Components/Sidebar/Sidebar'
import {withRouter} from 'react-router-dom'

function App(props) {
  const {location} = props
  return (
    <div className="App">
      {location.pathname !== '/login' && <Header />}
      <div className = 'main'>
        {location.pathname !== '/login' && <Sidebar />}
        {routes}
        {location.pathname !== '/login' && <Sidebar />}
      </div>
    </div>
  );
}

export default withRouter(App)
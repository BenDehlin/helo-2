import React from 'react'
import '../../App.css'
import './Header.css'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {logout} from '../../redux/authReducer'

function Header(props){
  const {user, logout, history} = props
  return (
    <header>
      <nav>
        <span>Welcome {user.username}</span>
        <button
        onClick = {() => {
          history.push('/dashboard')
        }}
        >Dashboard</button>
        {user.id &&
        <button
        onClick ={() => {
          history.push('/form')
        }}
        >Create</button>
        }
        <button
        onClick = {() => {
          logout()
          history.push('/login')
        }}
        >Logout</button>
      </nav>
    </header>
  )
}

const mapStateToProps = (state) => {
  const {user} = state.authReducer
  return {
    user
  }
}
const mapDispatchToProps = {
  logout
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header))
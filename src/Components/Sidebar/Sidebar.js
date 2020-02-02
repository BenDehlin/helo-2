import React from 'react'
import '../../App.css'
import './Sidebar.css'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

const Sidebar = (props) => {
  const {user, history} = props
  const {id, username, img} = user || ''
  return (
    <div className='sidebar'>
      <h1>{username}</h1>
      <img 
      onClick = {() => history.push(`/user/${id}`)}
      src={img} className='profile-pic' />
    </div>
  )
}

const mapStateToProps = (state) => {
  const {user} = state.authReducer
  return {user}
}

export default connect(mapStateToProps)(withRouter(Sidebar))
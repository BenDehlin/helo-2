import React from 'react'
import {connect} from 'react-redux'
import '../../App.css'
import './UserPage.css'

function UserPage(props){
  const {user} = props
  const {username, img} = user || ''
  return (
    <div>
      <h1>User: {username}</h1>
      <img src={img} className='profile-pic' alt={username} />
      </div>
  )
}

const mapStateToProps = (state) => {
  const {user} = state.authReducer
  return {user}
}

export default connect(mapStateToProps)(UserPage)
import React from 'react'
import '../../App.css'
import './Header.css'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {logout} from '../../redux/authReducer'
import {AiOutlineLogout} from 'react-icons/ai'
import {TiHomeOutline, TiDocumentAdd} from 'react-icons/ti'

function Header(props){
  const {user, logout, history} = props
  return (
    <header>
      <nav>
        <TiHomeOutline
        className = 'icon'
        onClick = {() => {
          history.push('/dashboard')
        }}
        />
        {user.id &&
        <TiDocumentAdd
        className = 'icon'
        onClick ={() => {
          history.push('/form')
        }}
        />
        }
        <AiOutlineLogout
        className = 'icon'
        onClick = {() => {
          logout()
          history.push('/login')
        }}
        />
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
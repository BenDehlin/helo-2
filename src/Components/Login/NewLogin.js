import React from 'react'
import '../../App.css'
import './Login.css'
import withState from '../../hocs/withState'
import {AiOutlineLogin} from 'react-icons/ai'
import {connect} from 'react-redux'
import {login} from '../../redux/authReducer'
import {register} from '../../redux/authReducer'

let initialData = {
  username: '',
  password: '',
  registerBool: false
}

const Login = (props) => {
  const {login, register, clearFields, handleChange, username, password, title, registerBool, toggleRegister, history} = props
  return (
    <div className='login-page'>
      <h3>{title}</h3>
      <button
        onClick={() => toggleRegister(!registerBool)}
        >{registerBool ? 'Switch to Login' : 'Switch to Register'} </button>
      <input
      name='username'
      value={username}
      placeholder='enter username'
      onChange = {(e) => handleChange(e.target)}
      />
      <input
      name='password'
      value={password}
      placeholder='enter password'
      onChange = {(e) => handleChange(e.target)}
      />
      <AiOutlineLogin
      className = 'icon'
      onClick = {() => {
        registerBool ? register({username, password}) : login({username, password})
        clearFields({username, password})
        history.push('/dashboard')
      }}
      />
    </div>
  )
}

const mapDispatchToProps = {
  login, register
}

export default connect(null, mapDispatchToProps)(withState(Login, initialData))
import React, {useState} from 'react'
import '../../App.css'
import './Login.css'
import {connect} from 'react-redux'
import {login, register} from '../../redux/authReducer'
import {AiOutlineLogin} from 'react-icons/ai'

const Login = ({login, register, history}) => {
  const [state, setState] = useState({
    username: '',
    password: '',
    registerBool: false
  })
  const {username, password, registerBool} = state

  const handleChange = ({name, value}) => setState({...state, [name]: value})
  const handleLogin = () => {
    registerBool ? register({username, password}) : login({username, password})
    history.push('/dashboard')
  }

  return (
    <div className='login-page'>
    <button
    onClick={() => setState({registerBool: !registerBool})}
    >{registerBool ? 'Switch to Login' : 'Switch to Register'} </button>
    <input
    name='username'
    value={username}
    placeholder='enter username'
    onChange={(e) => handleChange(e.target)}
    />
    <input
    name='password'
    value={password}
    placeholder='enter password'
    onChange={(e) => handleChange(e.target)}
    />
    <AiOutlineLogin
    className = 'icon'
    onClick = {() => handleLogin()}
    />
  </div> 
  )
}

const mapDispatchToProps = {
  login, register
}

export default connect(null, mapDispatchToProps)(Login)
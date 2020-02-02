import React, {Component} from 'react'
import '../../App.css'
import './Login.css'
import {connect} from 'react-redux'
import {login} from '../../redux/authReducer'
import {register} from '../../redux/authReducer'

class Login extends Component{
  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: '',
      registerBool: false
    }
  }
  handleChange = ({name, value}) => this.setState({[name]: value})
  handleLogin = () => {
    const {username, password, registerBool} = this.state
    const {login, history} = this.props
    registerBool ? register({username, password}) : login({username, password})
    this.setState({username: '', password: ''})
    history.push('/dashboard')
  }
  render(){
    const {registerBool, username, password} = this.state
    return (
      <div className='login-page'>
        <button
        onClick={() => this.setState({registerBool: !registerBool})}
        >{registerBool ? 'Switch to Login' : 'Switch to Register'} </button>
        <input
        name='username'
        value={username}
        placeholder='enter username'
        onChange={(e) => this.handleChange(e.target)}
        />
        <input
        name='password'
        value={password}
        placeholder='enter password'
        onChange={(e) => this.handleChange(e.target)}
        />
        <button
        onClick = {() => this.handleLogin()}
        >{registerBool ? 'Register' : 'Login'}</button>
      </div>
    )
  }
}

const mapDispatchToProps = {
  login, register
}

export default connect(null, mapDispatchToProps)(Login)
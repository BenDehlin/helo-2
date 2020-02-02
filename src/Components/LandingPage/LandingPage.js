import React, {Component} from 'react'
import '../../App.css'
import './LandingPage.css'
import {connect} from 'react-redux'

class LandingPage extends Component{
  componentDidMount(){
    const {user, history} = this.props
    user.id ? history.push('/dashboard') : history.push('/login')
  }
  render(){
    return(
      <div>Landing</div>
    )
  }
}

const mapStateToProps = (state) => {
  const {user} = state.authReducer
  return {
    user
  }
}

export default connect(mapStateToProps)(LandingPage)
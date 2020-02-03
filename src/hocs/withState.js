import React, {Component} from 'react'

const withState = (WrappedComponent, initialData) => {
  return class extends Component {
    constructor(){
      super()
      this.state = initialData
  }

  toggleRegister = (registerBool) => this.setState({registerBool: registerBool})
  handleChange = ({name, value}) => this.setState({[name]: value})
  clearFields = (fields) => {
    for(let key in fields){
      this.setState({[key]: ''})
    }
  }

  render(){
    return(
      <WrappedComponent
      {...this.state}
      {...this.props}
      toggleRegister = {this.toggleRegister}
      handleChange={this.handleChange}
      clearFields={this.clearFields}
      />
    )
  }}
}

export default withState
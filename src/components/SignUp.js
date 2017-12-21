import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Navigation from './Navigation'
import CloseForm from './CloseForm'
import TextInput from './TextInput'

class SignUp extends Component {
  state = {}
  render() {
    return (
      <div className="outermost-container">
        <CloseForm title="Sign Up"/>
        <TextInput />
      </div>
    )
  }
}

export default SignUp;

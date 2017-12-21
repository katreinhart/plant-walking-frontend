import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Navigation from './Navigation'
import CloseForm from './CloseForm'
import TextInputLabeled from './TextInputLabeled'
import GreenButton from './GreenButton'

class SignUp extends Component {
  state = {}
  render() {
    return (
      <div className="outermost-container">
        <CloseForm title="Sign Up"/>
        <TextInputLabeled label="username"/>
        <TextInputLabeled label="e-mail"/>
        <TextInputLabeled label="password"/>
        <div className="buttons-container">
          <GreenButton text="sign up"/>
        </div>
      </div>
    )
  }
}

export default SignUp;

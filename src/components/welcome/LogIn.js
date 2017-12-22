import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Navigation from '../shared/Navigation'
import CloseForm from '../shared/CloseForm'
import TextInputLabeled from '../shared/TextInputLabeled'
import GreenButton from '../shared/GreenButton'

class SignUp extends Component {
  state = {}
  render() {
    return (
      <div className="outermost-container">
        <CloseForm title="Log In"/>
        <TextInputLabeled label="e-mail"/>
        <TextInputLabeled label="password"/>
        <div className="buttons-container">
          <GreenButton text="log in"/>
        </div>
      </div>
    )
  }
}

export default SignUp;

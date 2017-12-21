import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Navigation from './shared/Navigation'
import CloseForm from './CloseForm'
import TextInput from './TextInput'
import GreenButton from './shared/GreenButton'

class EditSteps extends Component {
  state = {}
  render() {
    return (
      <div className="outermost-container">
        <Navigation />
        <CloseForm title="Edit Steps"/>
        <p className="text-ctr green" id="date">Date</p>
        <TextInput />
        <div className="buttons-container">
          <div className="delete">
            <p>Delete</p>
            <i className="material-icons">delete</i>
          </div>
          <GreenButton text="Save"/>
        </div>
      </div>
    )
  }
}

export default EditSteps;

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Navigation from './Navigation'
import CloseForm from './CloseForm'

class EditSteps extends Component {
  state = {}
  render() {
    return (
      <div className="outermost-container">
        <Navigation />
        <CloseForm title="Edit Steps"/>
        <div className="input-container">
          <p className="text-ctr green">Date</p>
          <input className="input-field" type="text" />
        </div>
        <div className="buttons-container">
          <div className="delete">
            <p>Delete</p>
            <i className="material-icons">delete</i>
          </div>
          <button className="button save-button">Save</button>
        </div>
      </div>
    )
  }
}

export default EditSteps;

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
      </div>
    )
  }
}

export default EditSteps;

import React, { Component } from 'react'
import CloseForm from '../shared/CloseForm'

class DeleteSteps extends Component {
  state = {}
  render() {
    return (
      <div className="outermost-container">
        <CloseForm title="Delete Steps"/>
        <p className="text-ctr green mt-2">Are you sure you want to delete: <br/><br/><b>0000 steps</b><br/><br/>from Insert-Date-Here?<br/><br/>Your plant will lose the growth it gained from these steps.</p>

        <div className="buttons-container">
          <div className="delete">
            <p>Yes, Delete</p>
            <i className="material-icons">delete</i>
          </div>
        </div>
      </div>
    )
  }
}

export default DeleteSteps;

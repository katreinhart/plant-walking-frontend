import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Navigation from '../shared/Navigation'
import CloseForm from '../shared/CloseForm'
import TextInput from '../shared/TextInput'
import GreenButton from '../shared/GreenButton'
import axios from 'axios'

const backendURL = 'https://secure-reaches-21432.herokuapp.com/api'

class EditSteps extends Component {
  constructor(props){
    super(props)
    this.editSteps= this.editSteps.bind(this)
  }

  async editSteps () {
    let number_of_steps = document.querySelector('#editedStepInput').value
    let id = this.props.location.state.step_id
    const body ={ id, number_of_steps}
    await axios.patch(`${backendURL}/steps`, body)

  }

  render() {
    console.log('EditSteps baby',this.props.location.state);
    return (
      <div className="outermost-container">
        <Navigation />
        <CloseForm title="Edit Steps"/>
        <p className="text-ctr green" id="date">Grown On {this.props.location.state.date}</p>
        {/* <p className="text-ctr green" id="numOfSteps">Steps: {this.props.location.state.step}</p> */}
        <TextInput oldSteps={`${this.props.location.state.step}`}/>
        <div className="buttons-container">
          <div className="delete">
            <p>Delete</p>
            <i className="material-icons">delete</i>
          </div>
          <Link to='/'>
            <GreenButton text="Save" clickHandler={this.editSteps}/>
          </Link>
        </div>
      </div>
    )
  }
}

export default EditSteps;

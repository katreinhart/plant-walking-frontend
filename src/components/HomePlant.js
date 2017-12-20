import React, { Component } from 'react';
import { Link } from 'react-router-dom'
// import './App.css';
import Navigation from './Navigation'
import PlantContainer from './PlantContainer'
import ProgressBar from './ProgressBar'
import AddStepsContainer from './AddStepsContainer'
import ViewGarden from './ViewGarden'
import PastPlantDetails from './PastPlantDetails'
import CloseForm from './CloseForm'

class HomePlant extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      currentSteps: 0,
    }
    this.addSteps = this.addSteps.bind(this)
  }

  addSteps (e) {
    e.preventDefault()
    const input = e.target.querySelector('.add-steps-input')
    const stepsAdded = input.value
    input.value = ''
    this.setState({ currentSteps: this.state.currentSteps + parseInt(stepsAdded, 10) })
  }

  render() {
    return (
      <div className="outermost-container">
        <Navigation />
        <PlantContainer />
        <ProgressBar percent={ this.state.currentSteps } />
        <AddStepsContainer addSteps={ this.addSteps } />
        <Link to='/garden'>
          <ViewGarden />
        </Link>
      </div>
    );
  }
}

export default HomePlant;

//HOME
// <div className="outermost-container">
//   <Navigation />
//
//     <PlantContainer />
//       <ProgressBar />
//       <AddStepsContainer />
//       <ViewGarden />
// </div>

//PAST PLANT VIEW
// <div className="outermost-container">
//   <Navigation />
//     <CloseForm />
//     <PlantContainer />
//       <PastPlantDetails />
// </div>

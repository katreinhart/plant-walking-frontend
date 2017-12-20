import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation'
import PlantContainer from './components/PlantContainer'
import ProgressBar from './components/ProgressBar'
import AddStepsContainer from './components/AddStepsContainer'
import ViewGarden from './components/ViewGarden'
import PastPlantDetails from './components/PastPlantDetails'
import CloseForm from './components/CloseForm'

class App extends Component {
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
    console.log(`You just added ${stepsAdded} steps`)
    this.setState({ currentSteps: this.state.currentSteps + parseInt(stepsAdded, 10) })
  }

  render() {
    return (
      <div className="outermost-container">
        <Navigation />
        <PlantContainer />
        <ProgressBar percent={ this.state.currentSteps } />
        <AddStepsContainer addSteps={ this.addSteps } />
        <ViewGarden />
      </div>
    );
  }
}

export default App;

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

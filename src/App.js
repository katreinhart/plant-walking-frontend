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
  render() {
    return (
      <div className="outermost-container">
        <Navigation />
          <CloseForm />
          <PlantContainer />
            <PastPlantDetails />
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

import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation'
import PlantContainer from './components/PlantContainer'
import ProgressBar from './components/ProgressBar'
import AddStepsContainer from './components/AddStepsContainer'
import ViewGarden from './components/ViewGarden'

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />

          <PlantContainer />
            <ProgressBar />
            <AddStepsContainer />
            <ViewGarden />
        
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation'

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="home-container">
          <div className ="plant-container">
            <div className ="carousel-arrow left">
              <i className ="material-icons">keyboard_arrow_left</i>
            </div>
              <img className ="plant-image" alt="seedling" src="./images/seedling_plant.png" />
            <div className ="carousel-arrow right">
              <i className ="material-icons">keyboard_arrow_right</i>
            </div>
          </div>
          <div className ="progress-bar">
          </div>
          <div className="add-steps-container">
            <input className="add-steps-input" type="text" />
            <button className="add-steps-button">Add Steps</button>
          </div>
          <div className="view-garden-container">
            <a href="#">View Garden</a>
            <i className ="material-icons">keyboard_arrow_down</i>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

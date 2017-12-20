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
          <div className="back-to-plant-container">
            <i className="material-icons">keyboard_arrow_up</i>
            <a href="#">Back to plant</a>
          </div>

          <div className="garden-container">

            <div className="garden-row">
              <div className="garden-plant-box odd-plant-row">
                <i className=" plant material-icons">insert_emoticon</i>
              </div>
              <div className="garden-plant-box odd-plant-row">
                <i className=" plant material-icons">insert_emoticon</i>
              </div>
              <div className="garden-plant-box odd-plant-row">
                <i className=" plant material-icons">insert_emoticon</i>
              </div>
              <div className="garden-plant-box odd-plant-row">
                <i className=" plant material-icons">insert_emoticon</i>
              </div>
            </div>

            <div className="garden-row">
              <div className="garden-plant-box even-plant-row">
                <i className=" plant material-icons">insert_emoticon</i>
              </div>
              <div className="garden-plant-box even-plant-row">
                <i className=" plant material-icons">insert_emoticon</i>
              </div>
              <div className="garden-plant-box even-plant-row">
                <i className=" plant material-icons">insert_emoticon</i>
              </div>
              <div className="garden-plant-box even-plant-row">
                <i className=" plant material-icons">insert_emoticon</i>
              </div>
            </div>

            <div className="garden-row">
              <div className="garden-plant-box odd-plant-row">
                <i className=" plant material-icons">insert_emoticon</i>
              </div>
              <div className="garden-plant-box odd-plant-row">
                <i className=" plant material-icons">insert_emoticon</i>
              </div>
              <div className="garden-plant-box odd-plant-row">
                <i className=" plant material-icons">insert_emoticon</i>
              </div>
              <div className="garden-plant-box odd-plant-row">
                <i className=" plant material-icons">insert_emoticon</i>
              </div>
            </div>

            <div className="garden-row">
              <div className="garden-plant-box even-plant-row">
                <i className=" plant material-icons">insert_emoticon</i>
              </div>
              <div className="garden-plant-box even-plant-row">
                <i className=" plant material-icons">insert_emoticon</i>
              </div>
              <div className="garden-plant-box even-plant-row">
                <i className=" plant material-icons">insert_emoticon</i>
              </div>
              <div className="garden-plant-box even-plant-row">
                <i className=" plant material-icons">insert_emoticon</i>
              </div>
            </div>

          </div>





      </div>
    );
  }
}

export default App;

//HOME
// <div className="outermost-container">
//   <Navigation />
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

import React from 'react';
import { Link } from 'react-router-dom'
// import './App.css';
import Navigation from '../shared/Navigation'
import PlantContainer from './PlantContainer'
import ProgressBar from './ProgressBar'
import AddStepsContainer from './AddStepsContainer'
import ViewGarden from '../garden/ViewGarden'

const HomePlant = ({ plant_id, plant_name, steps_required, steps_recorded, addSteps }) => {
  return (
    <div className="outermost-container">
      <Navigation />
      <PlantContainer />
      <ProgressBar percent={ (parseInt(steps_recorded, 10) / parseInt(steps_required, 10) * 100) } />
      <AddStepsContainer addSteps={ addSteps } />
      <Link to='/garden'>
        <ViewGarden />
      </Link>
    </div>
  )
}
 
export default HomePlant

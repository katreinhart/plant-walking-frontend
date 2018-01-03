import React from 'react';
import { Link, Redirect } from 'react-router-dom'
// import './App.css';
import Navigation from '../shared/Navigation'
import PlantContainer from './PlantContainer'
import ProgressBar from './ProgressBar'
import AddStepsContainer from './AddStepsContainer'
import ViewGarden from '../garden/ViewGarden'

const HomePlant = ({ plant_id, steps_required, steps_recorded, addSteps }) => {
  if(!plant_id) {
    return (<Redirect to='/pickseed' />)
  } else
  return (
    <div className="outermost-container">
      <Navigation />
      <PlantContainer plantId={ plant_id } stepsRecorded={ steps_recorded }/>
      <ProgressBar percent={ (parseInt(steps_recorded, 10) / parseInt(steps_required, 10) * 100) } />
      <AddStepsContainer addSteps={ addSteps } />
      <Link to='/garden'>
        <ViewGarden />
      </Link>
    </div>
  )
}

export default HomePlant

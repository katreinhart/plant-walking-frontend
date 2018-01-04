import React from 'react';
import { Link, Redirect } from 'react-router-dom'
// import './App.css';
import Navigation from '../shared/Navigation'
import CurrentPlantContainer from './CurrentPlantContainer'
import ProgressBar from './ProgressBar'
import AddStepsContainer from './AddStepsContainer'
import ViewGarden from '../garden/ViewGarden'

const HomePlant = ({ plant_id, steps_required, steps_recorded, addSteps, currentPlantTypeId }) => {
  // if(!plant_id) {
  //   return (<Redirect to='/pickseed' />)
  // } else
  console.log(addSteps);
  return (
    <div className="outermost-container">
      <Navigation />
      <CurrentPlantContainer currentPlantTypeId={ currentPlantTypeId } steps_recorded={ steps_recorded } steps_required={ steps_required }/>
      <ProgressBar percent={ (parseInt(steps_recorded, 10) / parseInt(steps_required, 10) * 100) } />
      <AddStepsContainer addSteps={ addSteps } />
      <Link to='/garden'>
        <ViewGarden />
      </Link>
    </div>
  )
}

export default HomePlant

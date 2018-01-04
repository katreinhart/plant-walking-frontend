import React from 'react';
import { Link, Redirect } from 'react-router-dom'
// import './App.css';
import Navigation from '../shared/Navigation'
import CurrentPlantContainer from './CurrentPlantContainer'
import ProgressBar from './ProgressBar'
import AddStepsContainer from './AddStepsContainer'
import ViewGarden from '../garden/ViewGarden'

const HomePlant = ({ 
  handleAddSteps,
  currentPlantInstanceId,
  currentPlantStepsProgress,
  currentPlantStepsRequired,
  currentPlantTypeId 
}) => {
  if(!currentPlantInstanceId) {
    // turning this back on with caution ... 
    return <Redirect to={'/pickseed'} />
  }
  else return (
    <div className="outermost-container">
      <Navigation />
      <CurrentPlantContainer currentPlantTypeId={ currentPlantTypeId } steps_recorded={ currentPlantStepsProgress } steps_required={ currentPlantStepsRequired }/>
      <ProgressBar percent={ (parseInt(currentPlantStepsProgress, 10) / parseInt(currentPlantStepsRequired, 10) * 100) } />
      <AddStepsContainer addSteps={ handleAddSteps } />
      <Link to='/garden'>
        <ViewGarden />
      </Link>
    </div>
  )
}

export default HomePlant

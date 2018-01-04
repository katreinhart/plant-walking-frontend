import React from 'react'
import { Link } from 'react-router-dom'
import GreenButton from '../shared/GreenButton'

const AddStepsContainer = ({ addSteps }) => {
  return (
    <div className="input-container" >
    <p className="center">You finished your plant!!</p>
    <Link to='/pickseed' style={{width: '95%'}}>
      <GreenButton text="Pick a new seed!" />
    </Link>
    </div>
  )
}

export default AddStepsContainer

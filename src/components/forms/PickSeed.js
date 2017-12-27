import React, { Component } from 'react'
import Navigation from '../shared/Navigation'
import CloseForm from '../shared/CloseForm'
import PlantContainer from '../home/PlantContainer'
import GreenButton from '../shared/GreenButton'

class PickSeed extends Component {
  state = {}
  render() {
    return (
      <div className="outermost-container">
        <Navigation />
        <CloseForm title="Pick New Seed"/>
        <PlantContainer />
        <div className="new-plant-details text-ctr mt-2">
          <h3 className="new-plant-name">Morning Glory</h3>
          <p className="new-plant-steps">20,000 steps</p>
        </div>
        <div className="buttons-container">
          <GreenButton text="Pick This Seed!"/>
        </div>
      </div>
    )
  }
}

export default PickSeed;

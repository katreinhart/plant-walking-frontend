import React, { Component } from 'react'
import CloseForm from '../shared/CloseForm'
import PlantContainer from '../home/PlantContainer'
import GreenButton from '../shared/GreenButton'
import Carousel from 'nuka-carousel'

import axios from 'axios'

const localhostURL = 'http://localhost:2999/api'

class PickSeed extends Component {
  constructor() {
    super() 
    this.state = {
      plants: []
    }
  }

  componentDidMount() {
    this.retrievePlantTypes() 
  }

  async retrievePlantTypes() {
    const response = await axios.get(`${localhostURL}/plant-types`)
    console.log(response)
    this.setState({
      plants: response.data.plants
    })
  }

  render() {
    return (
      <div className="outermost-container">
        <CloseForm title="Pick New Seed"/>
        <Carousel>
          {
            this.state.plants.map(plant => (
              <SeedChoice key={plant.id} name={plant.name} steps_required={ plant.steps_required} />
            ))
          }
        </Carousel>
        
      </div>
    )
  }
}

const SeedChoice = ({ name, steps_required }) => (
  <div>
    <PlantContainer />
    <div className="new-plant-details text-ctr mt-2">
      <h3 className="new-plant-name">{ name }</h3>
      <p className="new-plant-steps">{ steps_required } steps</p>
    </div>
    <div className="buttons-container">
      <GreenButton text="Pick This Seed!" />
    </div>
  </div>
)

export default PickSeed;

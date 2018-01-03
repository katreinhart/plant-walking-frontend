import React, { Component } from 'react'
import CloseForm from '../shared/CloseForm'
import PlantContainer from '../home/PlantContainer'
import GreenButton from '../shared/GreenButton'
import Carousel, { CarouselDecorator } from 'nuka-carousel'

import '../../css/pickseed.css'

import axios from 'axios'

const localhostURL = 'http://localhost:2999/api'

class PickSeed extends Component {
  constructor() {
    super() 
    this.state = {
      plants: []
    }
    this.handleNext = this.handleNext.bind(this)
    this.handlePrev = this.handlePrev.bind(this)
  }

  componentDidMount() {
    this.retrievePlantTypes() 
  }

  async retrievePlantTypes() {
    const response = await axios.get(`${localhostURL}/plant-types`)
    this.setState({
      plants: response.data.plants
    })
  }

  handleNext (e) {
    e.preventDefault()
    this.refs.carousel.nextSlide()
  }

  handlePrev (e) {
    e.preventDefault()
    this.refs.carousel.previousSlide()
  }

  render() {
    return (
      <div className="outermost-container">
        <CloseForm title="Pick New Seed"/>
        <Carousel ref="carousel" 
          decorators={ CarouselDecorator } 
          wrapAround 
          dragging 
          initialSlideHeight={800} 
          style={{'height': '80%'}}
        >
          {
            this.state.plants.map(plant => (
              <SeedChoice 
                key={plant.id}
                id={plant.id}
                name={plant.name}
                steps_required={ plant.steps_required }
                handleNext={ this.handleNext }
                handlePrev={ this.handlePrev }
                handleSelect={ this.props.handleSelect }
              />
            ))
          }
        </Carousel>
      </div>
    )
  }
}

const SeedChoice = ({ id, name, steps_required, handleNext, handlePrev, handleSelect }) => (
  <div>
    <PlantContainer handleNext={handleNext} handlePrev={handlePrev} />
    <div className="new-plant-details text-ctr mt-2">
      <h3 className="new-plant-name">{ name }</h3>
      <p className="new-plant-steps">{ steps_required } steps</p>
    </div>
    <div className="buttons-container" style={{minHeight: '100px'}}>
      <GreenButton text="Pick This Seed!" clickHandler={ handleSelect } id={ id } />
    </div>
  </div>
)

export default PickSeed;

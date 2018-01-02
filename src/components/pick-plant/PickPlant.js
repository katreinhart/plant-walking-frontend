import React, { Component } from 'react'
import CloseForm from '../shared/CloseForm'
// import PlantChooser from './PlantChooser'
import GreenButton from '../shared/GreenButton'

class PlantPicker extends Component {
  state = {}
  render() { 
    return ( 
      <div>
        <CloseForm />
        <div>Placeholder Text</div>
        <GreenButton text='Pick this plant' />
      </div>
    )
  }
}
 
export default PlantPicker
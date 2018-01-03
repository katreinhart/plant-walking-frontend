import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import Navigation from '../shared/Navigation'
// import CloseForm from '../shared/CloseForm'
// import TextInputLabeled from '../shared/TextInputLabeled'
import GreenButton from '../shared/GreenButton'

class Welcome extends Component {
  state = {}
  render() {
    return (
      <div className="splash-container">

        <img className="splash-image" src="./images/grown_plant.png" alt="A plant"/>

        <div className="buttons-container">
          <Link to='/signup'>
            <GreenButton text="sign up"/>
          </Link>
          <Link to='/login'>
            <GreenButton text="log in"/>
          </Link>
        </div>
      </div>
    )
  }
}

export default Welcome;

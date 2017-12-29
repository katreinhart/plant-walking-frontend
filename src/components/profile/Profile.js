import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Navigation from '../shared/Navigation'
import TextInputLabeled from '../shared/TextInputLabeled'
import GreenButton from '../shared/GreenButton'

class Profile extends Component {
  state = {}
  render() {
    return (
      <div>
        <Navigation />
        <TextInputLabeled label="Username" />
        <TextInputLabeled label="E-mail" />
        <TextInputLabeled label="Password" />
        <div className="buttons-container">
          <GreenButton text="Save" />
        </div>
      </div>
    )
  }
}

export default Profile;

import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import GreenButton from '../shared/GreenButton'

const Welcome = () => {
  if(window.isAuthenticated) {
    return (
      <Redirect to='/' />
    )
  } else {
    return (
      <div className="splash-container">
        <img className="splash-image" src="./images/grown_plant.png" alt="A plant"/>
  
        <div className="buttons-container">
          <Link to='/signup' style={{width: '95%'}}>
            <GreenButton text="sign up" />
          </Link>
          <Link to='/login' style={{width: '95%'}}>
            <GreenButton text="log in" />
          </Link>
        </div>
      </div>
    )
  }
}

export default Welcome;

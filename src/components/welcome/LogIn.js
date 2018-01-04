import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import TextInputLabeled from '../shared/TextInputLabeled'
import GreenButton from '../shared/GreenButton'

const LogIn = (({ onSignIn, loginError }) => {

  if(window.isAuthenticated) {
    return (
      <Redirect to='/' />
    )
  } else {
    return (
      <div className="outermost-container">
        {/* <CloseForm title="Log In"/> */}

        <form onSubmit={ onSignIn }>
          <TextInputLabeled role="text" label="email"/>
          <TextInputLabeled role="password" label="password" />
          { loginError ? <div className="error">There was an error logging you in. Please check your inputs and try again.</div> : '' }
          <div className="buttons-container">
            <GreenButton text="log in" />
          </div>
        </form>
        <p className="text-ctr">
          <Link to='/signup'>Need to register? Click here!</Link>
        </p>
      </div>
    )
  }
})

export default LogIn

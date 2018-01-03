import React from 'react'
import {Redirect} from 'react-router-dom'

const GreenButton = ({ text, clickHandler, id }) => {
  return (
    <button className="button green-button" onClick={clickHandler} id={id}>
      { text }
    </button>
  )
}

export default GreenButton

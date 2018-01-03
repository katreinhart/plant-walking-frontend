import React from 'react'
import {Redirect} from 'react-router-dom'

const GreenButton = ({ text }) => {
  return (
    <button className="button green-button">
      { text }
    </button>
  )
}

export default GreenButton

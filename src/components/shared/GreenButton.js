import React from 'react'

const GreenButton = ({ text, clickHandler, id }) => {
  return (
    <button className="button green-button" onClick={clickHandler} id={id}>
      { text }
    </button>
  )
}

export default GreenButton

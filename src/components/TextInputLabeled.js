import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const TextInputLabeled = ({ label }) => {
    return (
      <div className="input-container">
        <p className="input-label green">
          { label }</p>
        <input className="input-field" type="text" />
      </div>
    )
}

export default TextInputLabeled;

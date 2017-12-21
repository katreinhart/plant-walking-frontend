import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class TextInput extends Component {
  state = {}
  render() {
    return (
      <div className="input-container">
        <input className="input-field" type="text" />
      </div>
    )
  }
}

export default TextInput;

import React, { Component } from 'react'

class TextInput extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className="input-container">
        <input id='editedStepInput' className="input-field" type="text" defaultValue={this.props.oldSteps}/>
      </div>
    )
  }
}

export default TextInput;

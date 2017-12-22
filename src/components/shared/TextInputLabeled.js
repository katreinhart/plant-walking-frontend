import React from 'react'

const TextInputLabeled = ({ role, label, onChange }) => {
    return (
      <div className="input-container">
        <p className="input-label green">
          { label }</p>
        <input className="input-field" type={ role } onChange={ onChange } />
      </div>
    )
}

export default TextInputLabeled;

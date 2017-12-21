import React from 'react'

const CloseForm = ({ title }) => {
  return (
    <div>
      <div className="close-form">
        <h3 className="title">{ title }</h3>
        <i className="material-icons close-x">close</i>
      </div>
      <hr></hr>
    </div>
  )
}

export default CloseForm

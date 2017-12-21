import React from 'react'

const CloseForm = ({ title }) => {
  return (
    <div className="close-form">
      <h3 className="title">{ title }</h3>
      <i className="material-icons close-x">close</i>
    </div>
  )
}

export default CloseForm

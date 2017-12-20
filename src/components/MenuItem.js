import React from 'react'

const MenuItem = ({ name }) => {
  return (
    <div>
      <div className="history-item">
        <p className="history-column">{ name }</p>
      </div>
      <hr></hr>
    </div>
  )
}

export default MenuItem
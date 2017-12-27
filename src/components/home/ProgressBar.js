import React from 'react'

const ProgressBar = ({ percent }) => {
  const style = {
    width: `${percent}%`
  }
  return (
    <div>
      <div className="topsoil-line"></div>
      <div className="progress-background">
        <div className ="progress-bar" style={ style }>
        </div>
      </div>
    </div>
  )
}

export default ProgressBar

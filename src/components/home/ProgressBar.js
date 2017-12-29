import React from 'react'
import axios from 'axios'
const ProgressBar = ({ percent }) => {
  const style = {
    width: `${percent}%`
  }
  console.log(percent);
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

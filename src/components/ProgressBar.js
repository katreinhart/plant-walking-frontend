import React from 'react'

const ProgressBar = ({ percent }) => {
  console.log(percent + '% finished')
  const style = {
    width: `${percent}%`
  }
  return (
    <div>
      <div className="topsoil-line"></div>
      <div className ="progress-bar" style={ style }>
      </div>
    </div>
  )
}

export default ProgressBar

import React from 'react'
import { Link } from 'react-router-dom'

const MenuItem = ({ name, link }) => {
  return (
    <div>
      <Link className="history-item" to={ link }>
        <p className="history-column">{ name }</p>
      </Link>
      <hr></hr>
    </div>
  )
}

export default MenuItem
import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav>
      <div>brand</div>
      <Link to='/menu'>
        <i className="material-icons">menu</i>
      </Link>
    </nav>
  )
}

export default Navigation

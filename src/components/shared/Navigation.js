import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav>
      <div><a className="brand" href="#">brand</a></div>
      <Link to='/menu'>
        <i className="material-icons hamburger">menu</i>
      </Link>
    </nav>
  )
}

export default Navigation

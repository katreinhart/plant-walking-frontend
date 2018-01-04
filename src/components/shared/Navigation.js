import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav>
      <Link to='/' className='brand'>
        Garden Walk
      </Link>
      <Link to='/menu'>
        <i className="material-icons hamburger">menu</i>
      </Link>
    </nav>
  )
}

export default Navigation

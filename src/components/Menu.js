import React from 'react'
import MenuItem from './MenuItem'
import Navigation from './Navigation'

const menuStuff = ['home', 'back', 'menu thing 3']

const Menu = () => (
  <div className="outermost-container">
    <Navigation />
    <div className="history-container">
      <div className="title">
        <h2 className="history-title text-ctr">Menu</h2>
      </div>
      <div className="history-list-container">
        <hr></hr>

        {menuStuff.map(item => <MenuItem name={item} />)}

      </div>
    </div>
  </div>
)
 
export default Menu;
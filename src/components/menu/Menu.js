import React from 'react'
import MenuItem from './MenuItem'
import Navigation from '../shared/Navigation'

const menuStuff = [
  {id: 0, name: 'Profile', path: '/profile'}, 
  {id: 1, name:'History', path:'/history'}, 
  {id: 2, name:'Current Plant', path:'/'}, 
  {id: 3, name:'Garden', path:'/garden'}
]

const Menu = () => (
  <div className="outermost-container">
    <Navigation />
    <div className="history-container">
      <div className="title">
        <h2 className="history-title text-ctr">Menu</h2>
      </div>
      <div className="history-list-container">
        <hr></hr>

        {menuStuff.map(item => <MenuItem key={ item.id } name={ item.name } link={ item.path }/>)}

      </div>
    </div>
  </div>
)
 
export default Menu;
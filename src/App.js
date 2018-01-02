import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import axios from 'axios'
import Garden from './components/garden/Garden'
import HomePlant from './components/home/HomePlant'
import Menu from './components/menu/Menu'
import History from './components/history/History'
import EditSteps from './components/forms/EditSteps'
import DeleteSteps from './components/forms/DeleteSteps'
import SignUp from './components/welcome/SignUp'
import LogIn from './components/welcome/LogIn'
import Welcome from './components/welcome/Welcome'
import PickSeed from './components/forms/PickSeed'
import Profile from './components/profile/Profile'

class App extends Component {
  constructor() {
    super()
    const token = localStorage.getItem('token')

    if(token) {
      localStorage.setItem('logged_in', true)
      window.logged_in = true
    } else {
      localStorage.setItem('logged_in', false)
      window.logged_in = false
    }

    this.state = {
      authenticated: !!token,
      token: token
    }
  }

  render() {
    return (
      <Router>
        <div className="outermost-container">
          <PrivateRoute path='/' exact={true} component={ HomePlant } />
          <Route path='/signup' component={ SignUp } />
          <Route path='/login' component={ LogIn } />
          <Route path='/welcome' component={ Welcome } />
          <PrivateRoute path='/garden' component={ Garden } />
          <PrivateRoute path='/menu' component={ Menu } />
          <PrivateRoute path='/history' component={ History } />
          <PrivateRoute path='/editsteps' component={ EditSteps } />
          <PrivateRoute path='/deletesteps' component={ DeleteSteps } />
          <PrivateRoute path='/pickseed' component={ PickSeed } />
          <PrivateRoute path='/profile' component={ Profile } />
          <PrivateRoute path='/logout' component={ LogOut } />
        </div>
      </Router>
    );
  }
}

const LogOut = () => {
  window.logged_in = false
  localStorage.removeItem('token')

  return (
    <Redirect to={{
      pathname: '/login'
    }} />
)}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    window.logged_in ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

export default App;

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

const localhostURL = 'http://localhost:2999/api'

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
      token: token,
      currentUser: {
        email: '',
        user_id: ''
      },
      currentPlant: {}
    }

    this.updateProgressState = this.updateProgressState.bind(this)
    this.handleAddSteps = this.handleAddSteps.bind(this)
    this.handleSignIn = this.handleSignIn.bind(this)
  }

  componentDidMount() {
    this.updateProgressState()
  }

  async handleAddSteps(e) {
    e.preventDefault()

    const input = e.target.querySelector('.input-field')
    const stepsAdded = parseInt(input.value, 10)
    input.value = ''

    const body = {
      user_id: 2,
      number_of_steps: stepsAdded
    }
    const response = await axios.post(`${localhostURL}/steps`, body)
    this.updateProgressState()
  }

  async handleSignIn({email, password}) {

    try {
      const response = await axios.post(`${localhostURL}/users/login`, {email, password})
      console.log(response.data)
      let { token } = response.data
      localStorage.setItem('token', token)
      this.setState({
        authenticated: true,
        currentUser: {
          email: response.data.email,
          user_id: response.data.userId
        },
        currentPlant: {
          plantInstanceId: response.data.plantInstanceId,
          plant_types_id: response.data.plant_types_id,
          progress: response.data.progress,
        }
      })
      // redirect to home page
    }
    catch(error){
      console.log( 'errors', error);
      return({isError:true})
    }
  }

  async updateProgressState() {
    const response = await axios.get(`${localhostURL}/plant-instances/2`)
    const { user_id, plant_types_id, progress, id: plant_instance_id } = response.data.plant_instance
    const { data: { plant: { steps_required } }} = await axios.get(`${localhostURL}/plant-types/${plant_types_id}`)

    const prevState = Object.assign({}, this.state)
    this.setState({
      currentPlant: {
        plant_instance_id,
        plant_types_id,
        progress,
        steps_required,
      }, ...prevState
    })
  }

  render() {
    return (
      <Router>
        <div className="outermost-container">
          <PrivateRoute path='/' exact 
            component={ HomePlant } 
            addSteps={this.handleAddSteps} 
            plant_id={this.state.plant_instance_id}
            steps_recorded={this.state.currentPlant.progress}
            steps_required={this.state.currentPlant.steps_required}
          />
          <Route path='/signup' render={() => <SignUp />} />
          <Route path='/login'
            render={(routeProps) => (<LogIn {...routeProps}
              onSignIn={ this.handleSignIn }
            />)}
          />
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
    )
  }
}

const LogOut = () => {
  window.logged_in = false
  localStorage.removeItem('token')

  return (
    <Redirect to={{
      pathname: '/login'
    }} />
  )
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    window.logged_in ? (
      <Component {...props} {...rest} />
    ) : (
      <Redirect to={{
        pathname: '/welcome',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

export default App

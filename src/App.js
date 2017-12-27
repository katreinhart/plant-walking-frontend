import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Garden from './components/garden/Garden'
import HomePlant from './components/home/HomePlant'
import Menu from './components/menu/Menu'
import History from './components/history/History'
import EditSteps from './components/forms/EditSteps'
import SignUp from './components/welcome/SignUp'
import LogIn from './components/welcome/LogIn'
import Welcome from './components/welcome/Welcome'
import PickSeed from './components/forms/PickSeed'

class App extends Component {

  render() {
    return (
      <Router>
        <div className="outermost-container">
          <Route path='/' exact={true} component={ HomePlant } />
          <Route path='/garden' component={ Garden } />
          <Route path='/menu' component={ Menu } />
          <Route path='/history' component={ History } />
          <Route path='/editsteps' component={ EditSteps } />
          <Route path='/signup' component={ SignUp } />
          <Route path='/login' component={ LogIn } />
          <Route path='/welcome' component={ Welcome } />
          <Route path='/pickseed' component={ PickSeed } />
        </div>
      </Router>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Garden from './components/Garden'
import HomePlant from './components/HomePlant'
import Menu from './components/Menu'
import History from './components/History'
import EditSteps from './components/EditSteps'
import SignUp from './components/SignUp'
import LogIn from './components/LogIn'

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
        </div>
      </Router>
    );
  }
}

export default App;

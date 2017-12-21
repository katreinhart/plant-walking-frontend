import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Garden from './components/garden/Garden'
import HomePlant from './components/home/HomePlant'
import Menu from './components/menu/Menu'
import History from './components/history/History'
import EditSteps from './components/EditSteps'
import SignUp from './components/welcome/SignUp'

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
        </div>
      </Router>
    );
  }
}

export default App;

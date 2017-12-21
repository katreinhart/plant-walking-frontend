import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Garden from './components/Garden'
import HomePlant from './components/HomePlant'
import Menu from './components/Menu'
import History from './components/History'
import EditSteps from './components/EditSteps'

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
        </div>
      </Router>
    );
  }
}

export default App;

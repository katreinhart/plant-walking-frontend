import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Navigation from './Navigation'

class History extends Component {
  state = {}
  render() {
    return (
      <div className="outermost-container">
        <Navigation />
        <div className="history-container">
          <div className="title">
            <h2 className="history-title text-ctr">History</h2>
          </div>
          <div className="history-list-container">
            <hr></hr>

            <div>
              <div className="history-item">
                <p>Dec 10, 2017</p>
                <p>12,403 steps</p>
                <i class="material-icons">mode_edit</i>
              </div>
              <hr></hr>
            </div>

            <div>
              <div className="history-item">
                <p>Dec 10, 2017</p>
                <p>12,403 steps</p>
                <i class="material-icons">mode_edit</i>
              </div>
              <hr></hr>
            </div>

            <div>
              <div className="history-item">
                <p>Dec 10, 2017</p>
                <p>12,403 steps</p>
                <i class="material-icons">mode_edit</i>
              </div>
              <hr></hr>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default History;

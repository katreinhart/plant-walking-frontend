import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Navigation from '../shared/Navigation'
import HistoryItem from './HistoryItem'

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

            <HistoryItem />
            <HistoryItem />
            <HistoryItem />
            <HistoryItem />
            <HistoryItem />
            <HistoryItem />
            <HistoryItem />
            <HistoryItem />
            <HistoryItem />
            <HistoryItem />

          </div>
        </div>
      </div>
    )
  }
}

export default History;

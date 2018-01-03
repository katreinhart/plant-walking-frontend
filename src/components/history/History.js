import React, { Component } from 'react'
import Navigation from '../shared/Navigation'
import HistoryItem from './HistoryItem'
import axios from 'axios'
const localhostURL = 'http://localhost:2999/api'

class History extends Component {
  constructor(props){
    super(props)
    this.state = {steps:0}
  }

  async componentDidMount(){
    console.log(this.props.user_id );
    let steps = await axios.get(`${localhostURL}/steps/${this.props.user_id}`)
    console.log('history steps', steps);
  }

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

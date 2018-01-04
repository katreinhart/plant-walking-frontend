import React, { Component } from 'react'
import Navigation from '../shared/Navigation'
import HistoryItem from './HistoryItem'
import axios from 'axios'
const localhostURL = 'http://localhost:2999/api'

class History extends Component {
  constructor(props){
    super(props)
    this.state = {steps:[]}
  }

  async componentDidMount(){
    let steps = await axios.get(`${localhostURL}/steps/${this.props.user_id}`)
    let stepsArr = steps.data.response
    let stepHolder=[]
    stepsArr.map(step => {
      let date = new Date(step.created_at).toLocaleDateString()
      let stepObj = {date:date, steps:step.number_of_steps, step_id:step.id}
      stepHolder.push(stepObj)
    })
    this.setState({steps:stepHolder})
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
            {this.state.steps.map((step, i) => <HistoryItem key={i} step={step}/>)}


          </div>
        </div>
      </div>
    )
  }
}

export default History;

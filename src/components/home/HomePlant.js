import React from 'react';
import { Link, Redirect } from 'react-router-dom'
// import './App.css';
import Navigation from '../shared/Navigation'
import CurrentPlantContainer from './CurrentPlantContainer'
import ProgressBar from './ProgressBar'
import AddStepsContainer from './AddStepsContainer'
import LinkToPickPlant from './LinkToPickPlant'
import ViewGarden from '../garden/ViewGarden'

class HomePlant extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      stepsInput: 0,
      completed: false
    }
  }

  async updatePlantState() {
    if((this.props.currentPlantStepsRequired && this.props.currentPlantStepsProgress) &&
      (this.props.currentPlantStepsProgress >= this.props.currentPlantStepsRequired)) {
      await this.setState({ ...this.state, completed: true })
    } else {
      await this.setState({ ...this.state, completed: false })
   }
  }

  async componentDidMount() {
    await this.updatePlantState()
  }

  async componentWillReceiveProps(nextProps) {
    await this.updatePlantState()
  }

  getStepsInput(e) {
    e.preventDefault()
    const stepsInput = parseInt(e.target.querySelector('.input-field').value)

    this.setState({ ...this.state, stepsInput })
  }

  render() {
    if((this.props.currentPlantStepsRequired && this.props.currentPlantStepsProgress) &&
      (this.props.currentPlantStepsProgress >= this.props.currentPlantStepsRequired)) {
      // if there are values for steps required and progress, and progress is greater than or equal to required, plant is done
      this.props.currentPlantIsFinished()
    } 
    if(!this.props.currentPlantInstanceId) {
      // turning this back on with caution...
      return <Redirect to={'/pickseed'} />
    }
    else return (
      <div className="outermost-container">
        <Navigation />
        <CurrentPlantContainer currentPlantTypeId={ this.props.currentPlantTypeId }
          steps_recorded={ this.props.currentPlantStepsProgress } steps_required={ this.props.currentPlantStepsRequired } newSteps={ this.state.stepsInput }/>
        <ProgressBar percent={ (parseInt(this.props.currentPlantStepsProgress, 10) / parseInt(this.props.currentPlantStepsRequired, 10) * 100) } />
        {
          this.state.completed
          ? <LinkToPickPlant />
          : <AddStepsContainer addSteps={(e)=>{
            this.getStepsInput(e)
            this.props.handleAddSteps(e)
          }} />
        }
        <Link to='/garden'>
          <ViewGarden />
        </Link>
      </div>
    )
  }
}


export default HomePlant

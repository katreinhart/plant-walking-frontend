import React, { Component } from 'react'
import Grid from 'react-css-grid'
import axios from 'axios'

import { Link } from 'react-router-dom'
import Navigation from '../shared/Navigation'
import BackToPlant from './BackToPlant'

const localhostURL = 'http://localhost:2999/api'

class Garden extends Component {
  constructor(props){
    super(props)
    this.state =  { completedPlants:[] }
  }

  async componentDidMount(){
    console.log('user id', this.props.user_id);
    let garden = await axios.get(`${localhostURL}/plant-instances/garden/${this.props.user_id}`)
    console.log('garden', garden);
    this.setState({completedPlants:garden})
  }
  render() {
    return (
      <div className="outermost-container">
        <Navigation />
        <div className="back-to-plant-container">
          <Link to='/'>
            <BackToPlant />
          </Link>
        </div>

        <Grid 
          width={'25vw'} 
        >
        {
          this.state.completedPlants.map(plant => {
            const className = [5,6,7,8,13,14,15,16].includes(plant) ? "even-plant-row" : "odd-plant-row"
            return (
              <div className={"garden-plant-box " + className }>
                <i className=" plant material-icons">insert_emoticon</i>
              </div>
            )
          })
        }
        
        </Grid>
      </div>
     )
  }
}

export default Garden;


/*

<div className="garden-container mt-5">
            <div className="garden-row">
              <div className="garden-plant-box odd-plant-row">
                <i className=" plant material-icons">insert_emoticon</i>
              </div>
              <div className="garden-plant-box odd-plant-row">
                <i className=" plant material-icons">insert_emoticon</i>
              </div>
              <div className="garden-plant-box odd-plant-row">
                <i className=" plant material-icons">insert_emoticon</i>
              </div>
              <div className="garden-plant-box odd-plant-row">
                <i className=" plant material-icons">insert_emoticon</i>
              </div>
            </div>

            <div className="garden-row">
              <div className="garden-plant-box even-plant-row">
                <i className=" plant material-icons">insert_emoticon</i>
              </div>
              <div className="garden-plant-box even-plant-row">
                <i className=" plant material-icons">insert_emoticon</i>
              </div>
              <div className="garden-plant-box even-plant-row">
                <i className=" plant material-icons">insert_emoticon</i>
              </div>
              <div className="garden-plant-box even-plant-row">
                <i className=" plant material-icons">insert_emoticon</i>
              </div>
            </div>

            <div className="garden-row">
              <div className="garden-plant-box odd-plant-row">
                <i className=" plant material-icons">insert_emoticon</i>
              </div>
              <div className="garden-plant-box odd-plant-row">
                <i className=" plant material-icons">insert_emoticon</i>
              </div>
              <div className="garden-plant-box odd-plant-row">
                <i className=" plant material-icons">insert_emoticon</i>
              </div>
              <div className="garden-plant-box odd-plant-row">
                <i className=" plant material-icons">insert_emoticon</i>
              </div>
            </div>

            <div className="garden-row">
              <div className="garden-plant-box even-plant-row">
                <i className=" plant material-icons">insert_emoticon</i>
              </div>
              <div className="garden-plant-box even-plant-row">
                <i className=" plant material-icons">insert_emoticon</i>
              </div>
              <div className="garden-plant-box even-plant-row">
                <i className=" plant material-icons">insert_emoticon</i>
              </div>
              <div className="garden-plant-box even-plant-row">
                <i className=" plant material-icons">insert_emoticon</i>
              </div>
            </div>
          </div>

        */
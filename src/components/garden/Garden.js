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
    let {data: {garden}} = await axios.get(`${localhostURL}/plant-instances/garden/${this.props.user_id}`)
    console.log('garden', garden);
    this.setState({completedPlants:garden})
  }


  render() {
    const myPlants = [...this.state.completedPlants]
    while(myPlants.length < 16) {
      myPlants.push({})
    }

    console.log(myPlants)

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
          gap={0}
        >
        {
          myPlants.map((plant, i) => {
            const className = [4,5,6,7,12,13,14,15].includes(i) ? "even-plant-row" : "odd-plant-row"
            return (
              <GardenPlant index={i} className={className} displayImage={plant.plant_types_id}/>
            )
          })
        }
        
        </Grid>
      </div>
     )
  }
}

const GardenPlant = ({index, className, displayImage }) => (
  <div key={index} className={"garden-plant-box " + className }>
    { displayImage && <img src='./images/plant-1-completed.png' width='50%'/> }
  </div>
)

export default Garden;

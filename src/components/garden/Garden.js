import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Navigation from '../shared/Navigation'
import BackToPlant from './BackToPlant'
import Grid from 'react-css-grid'
const backendURL = 'https://secure-reaches-21432.herokuapp.com/api'

class Garden extends Component {
  constructor(props){
      super(props)
      this.state =  { completedPlants:[] }
  }



  async componentDidMount(){
    let {data: {garden}} = await axios.get(`${backendURL}/plant-instances/garden/${this.props.user_id}`)
    this.setState({completedPlants:garden})
  }


  render() {
    const myPlants = [...this.state.completedPlants]
    while(myPlants.length < 16) {
      myPlants.push({})
    }

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
              <GardenPlant key={i} index={i} className={className} displayImage={plant.plant_types_id}/>
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
    { displayImage && <img src='./images/plant-1-completed.png' width='50%' alt='a completed plant'/> }
  </div>
)

export default Garden;

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Navigation from '../shared/Navigation'
import BackToPlant from './BackToPlant'

class Garden extends Component {
  constructor(props){
      super(props)
      this.state =  { completedPlants:[] }
  }



  componentDidMount(){
    console.log(this.props.user_id);
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
      </div>
     )
  }
}

export default Garden;

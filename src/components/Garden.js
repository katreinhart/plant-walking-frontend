import React, { Component } from 'react'
import Navigation from './Navigation'

class Garden extends Component {
  state = {}
  render() { 
    return ( 
      <div className="outermost-container">
        <Navigation />
          <div className="back-to-plant-container">
            <i className="material-icons">keyboard_arrow_up</i>
            <a href="#">Back to plant</a>
          </div>

          <div className="garden-container">

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
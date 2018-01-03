import React from 'react'

class CurrentPlantContainer extends React.Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    // api call to retrieve current plant if it was not passed down
    // axios.get()
  }

  render () {
    return <div>{ JSON.stringify(this.props.currentPlant) }</div>
  }
}

export default CurrentPlantContainer

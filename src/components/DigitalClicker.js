import React, { Component } from 'react'

class DigitalClicker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      timesClicked: 0
    }
  }

  render() {
    return (
      <button onClick={this.incrementTimesClicked}>{this.state.timesClicked}</button>
    )
  }

  incrementTimesClicked = () => {
    let incrementedClicks = this.state.timesClicked + 1
    this.setState({timesClicked: incrementedClicks})
  }

}

export default DigitalClicker

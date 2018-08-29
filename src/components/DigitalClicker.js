import React, { Component } from 'react'

class DigitalClicker extends Component {

  constructor() {
    super()
    this.state = {
      timesClicked: 0
    }
    this.changeClicker = this.changeClicker.bind(this)
  }

  changeClicker(event) {
    this.setState((prevState, props) => {
      return ({timesClicked: prevState.timesClicked + 1 })
    })
  }

  render() {
    return <button onClick={this.changeClicker}>{this.state.timesClicked}</button>
  }
}

export default DigitalClicker

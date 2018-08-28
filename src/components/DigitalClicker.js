import React, { Component } from 'react'

class DigitalClicker extends Component {
  constructor() {
    super();
    this.state = {
      timesClicked: 0
    }
  }

  handleClick = (event) => {
    // const newTimesClicked = this.state.timesClicked + 1;
    // this.setState({
    //   timesClicked: newTimesClicked
    // })
    // this.setState(prevState => {debugger})

    // solution
    this.setState(prevState => ({
      timesClicked: prevState.timesClicked + 1
    }))
  }

  render() {
    return(
      <button onClick={this.handleClick}>{this.state.timesClicked}</button>
    )
  }
}

export default DigitalClicker;

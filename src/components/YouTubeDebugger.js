import React, { Component } from 'react'

class YoutubeDebugger extends Component {
  constructor(props) {
    super(props)
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p' }
        }
    }
  }

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.changeBitRate}>Change Bitrate</button>
        <button className="resolution" onClick={this.changeResolution}>Change Resolution</button>
      </div>
    )
  }

  changeBitRate = () => {
    this.setState({settings: {...this.state.settings, bitrate: 12}})
  }

  changeResolution = () => {
    this.setState({settings: {...this.state.settings, video: {resolution: '720p'}}})
  }



}

export default YoutubeDebugger

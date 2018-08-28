import React, { Component } from 'react'

class YouTubeDebugger extends Component {
  constructor() {
    super()
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  handleClickBitRate = () => {
    // this.setState(Object.assign({}, this.state, {
    //   errors: [],
    //   user: null,
    //   settings: {
    //     bitrate: 12,
    //     video: {
    //       resolution: '1080p'
    //     }
    //   }
    // }))

    //solution
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        bitrate: 12
      })
    })
  }

  handleClickResolution = () => {
    // this.setState(Object.assign({}, this.state, {
    //   errors: [],
    //   user: null,
    //   settings: {
    //     bitrate: 8,
    //     video: {
    //       resolution: '720p'
    //     }
    //   }
    // }))

    //solution
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        video: Object.assign({}, this.state.settings.video, {
          resolution: '720p'
        })
      })
    })
  }

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.handleClickBitRate}>Bitrate</button>
        <button className="resolution" onClick={this.handleClickResolution}>Resolution</button>
      </div>
    )
  }

}

export default YouTubeDebugger;

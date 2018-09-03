// Code YouTubeDebugger Component Here
import React, {Component} from 'react'

export default class YouTubeDebugger extends Component {
  constructor(props) {
    super(props)
    this.state = { errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p' }
        } }}


  handleResolutionClick = () => {
    this.setState({settings: {...this.state.settings, video: {resolution: '720p'}}})
  }

  handleBitrateClick = () => {
    this.setState({settings: {...this.state.settings, bitrate: 12}})
  }

  render(){
    return(
      <div>
        <button className="resolution"  onClick={this.handleResolutionClick}>{this.state.settings.video.resolution}</button>
        <button
          className="bitrate" onClick={this.handleBitrateClick}>{this.state.settings.bitrate}</button>
      </div>
    )
  }

}

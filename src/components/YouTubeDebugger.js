// Code YouTubeDebugger Component Here
import React from 'react'

class YouTubeDebugger extends React.Component {

    state = {
        errors: [],
        user: null,
        settings: {
          bitrate: 8,
          video: {
            resolution: '1080p'
            }
        }
    }
    

    handleBitrateClick = () => {
        // const stateClone = {...this.state.settings}
        // stateClone.bitrate = 12
        this.setState({
            settings: {
              ...this.state.settings,
              bitrate: 12
            }
        })
    }

    handleResClick = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    ...this.state.settings.video,
                resolution: '720p'}
            }
        })
    }


    render() {
        console.log(this.state)
        return(
            <div>
            <button onClick={this.handleBitrateClick} className="bitrate">.bitrate</button>
            <button onClick={this.handleResClick} className='resolution'>.resolution</button>
            </div>
        )
    }


}

export default YouTubeDebugger
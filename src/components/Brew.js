import React from 'react'
import { withRouter } from 'react-router'
import LinearProgress from 'material-ui/LinearProgress'

class Brew extends React.Component {
  constructor(props) {
    super(props)
    const selection = this.props.types.find(
      type => type.url === `/${this.props.match.params.type}`
    )
    this.state = {
      totalTime: selection.bloomTime + selection.brewTime,
      timeRemaining: selection.bloomTime + selection.brewTime,
      selection: selection,
      statusMessage: `Get to blooming!`
    }
  }

  componentDidMount() {
    this.timer = setTimeout(this.tick, 1000)
  }

  componentWillUnmount() {
    clearTimeout(this.timer)
  }

  tick = () => {
    const newState = {}
    const newTime = this.state.timeRemaining - 1
    if (newTime !== 0) this.timer = setTimeout(this.tick, 1000)
    if (newTime === 0) newState.statusMessage = 'All done!'
    if (newTime === this.state.totalTime - this.state.selection.bloomTime) {
      newState.statusMessage = 'Now wait...'
    }
    newState.timeRemaining = newTime
    this.setState(newState)
  }

  formatTime() {
    const minutes = Math.floor(this.state.timeRemaining / 60)
    const seconds = this.state.timeRemaining - minutes * 60
    let time = ''
    time += '' + minutes + ':' + (seconds < 10 ? '0' : '')
    time += '' + seconds
    return time
  }

  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '250px'
        }}
      >
        <h2 style={{ alignSelf: 'flex-start' }}>
          Nothing like a good<br />
          {this.state.selection.name}
        </h2>
        <br />
        <h3>{this.state.statusMessage}</h3>
        <h1>{this.formatTime()}</h1>
        <LinearProgress
          mode="determinate"
          max={this.state.totalTime}
          value={this.state.totalTime - this.state.timeRemaining}
        />
      </div>
    )
  }
}

export default withRouter(Brew)

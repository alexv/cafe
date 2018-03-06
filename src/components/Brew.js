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
      timeRemaining: selection.bloomTime + selection.brewTime
    }
  }

  componentDidMount() {
    this.timer = setTimeout(this.tick, 1000)
  }

  componentWillUnmount() {
    clearTimeout(this.timer)
  }

  tick = () => {
    const newTime = this.state.timeRemaining - 1
    this.setState(state => ({ timeRemaining: newTime }))
    if (newTime !== 0) {
      this.timer = setTimeout(this.tick, 1000)
    }
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
          justifyContent: 'center'
        }}
      >
        Brew {this.props.match.params.type}
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

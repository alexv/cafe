import React, { Component } from 'react'
import { withRouter } from 'react-router'
import FontIcon from 'material-ui/FontIcon'
import {
  BottomNavigation,
  BottomNavigationItem
} from 'material-ui/BottomNavigation'
import Paper from 'material-ui/Paper'

const starIcon = <FontIcon className="material-icons">star</FontIcon>
const coffeeIcon = <FontIcon className="material-icons">local_cafe</FontIcon>
const historyIcon = <FontIcon className="material-icons">history</FontIcon>

/**
 * A simple example of `BottomNavigation`, with three labels and icons
 * provided. The selected `BottomNavigationItem` is determined by application
 * state (for instance, by the URL).
 */
class BottomNavigationExampleSimple extends Component {
  state = {
    selectedIndex: 0
  }

  select = index => this.setState({ selectedIndex: index })

  render() {
    console.log(this.props)
    return (
      <Paper zDepth={1}>
        <BottomNavigation selectedIndex={this.state.selectedIndex}>
          <BottomNavigationItem
            label="Faves"
            icon={starIcon}
            onClick={() => this.props.history.push('/favorites')}
          />
          <BottomNavigationItem
            label="COFFEEEE"
            icon={coffeeIcon}
            onClick={() => this.props.history.push('/')}
          />
          <BottomNavigationItem
            label="History"
            icon={historyIcon}
            onClick={() => this.props.history.push('/history')}
          />
        </BottomNavigation>
      </Paper>
    )
  }
}

export default withRouter(BottomNavigationExampleSimple)

import React, { Component } from 'react'
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
    return (
      <Paper zDepth={1}>
        <BottomNavigation selectedIndex={this.state.selectedIndex}>
          <BottomNavigationItem
            label="Faves"
            icon={starIcon}
            onClick={() => this.select(0)}
          />
          <BottomNavigationItem
            label="COFFEEEE"
            icon={coffeeIcon}
            onClick={() => this.select(1)}
          />
          <BottomNavigationItem
            label="History"
            icon={historyIcon}
            onClick={() => this.select(2)}
          />
        </BottomNavigation>
      </Paper>
    )
  }
}

export default BottomNavigationExampleSimple

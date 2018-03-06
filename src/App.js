import React, { Component } from 'react'
import { Route, withRouter } from 'react-router'

import AppBar from 'material-ui/AppBar'

import './App.css'
import coffeeData from './types'
import Main from './components/Main'
import Brew from './components/Brew'
import Selection from './components/Selection'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar
          title="Café"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          showMenuIconButton={false}
          onTitleClick={() => this.props.history.push('/')}
        />
        <Route path="/" render={() => <Main types={coffeeData} />} />
        <Route
          path="/:type"
          render={() => <Selection types={coffeeData} />}
        />
        <Route
          path="/:type/brew"
          render={() => <Brew types={coffeeData} />}
        />

        {/* <BottomNavBar /> */}
      </div>
    )
  }
}

export default withRouter(App)

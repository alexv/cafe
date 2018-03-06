import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router'

import AppBar from 'material-ui/AppBar'

import './App.css'
import coffeeData from './types'
import Main from './components/Main'
import Brew from './components/Brew'

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
        <Switch>
          <Route
            path="/:type/brew"
            render={() => <Brew types={coffeeData.types} />}
          />
          <Route path="/" render={() => <Main types={coffeeData.types} />} />
        </Switch>
      </div>
    )
  }
}

export default withRouter(App)

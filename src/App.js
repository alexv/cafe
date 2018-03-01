import React, { Component } from 'react'
import { Switch, Route } from 'react-router'

import AppBar from 'material-ui/AppBar'

import './App.css'
import BottomNavBar from './components/BottomNavBar'
import Main from './components/Main'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 1
    }
  }

  handleChange = (event, index, value) => this.setState({ value })

  render() {
    return (
      <div className="App">
        <AppBar
          title="Café"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        <Switch>
          <Route path='/' component={Main} />
        </Switch>
        <BottomNavBar />
      </div>
    )
  }
}

export default App

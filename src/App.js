import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router'

import AppBar from 'material-ui/AppBar'

import './App.css'
// import BottomNavBar from './components/BottomNavBar'
import Main from './components/Main'
import Selection from './components/Selection'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      types: [
        {
          name: 'Drip',
          url: '/drip',
          grind: '13',
          ratio: '2',
          bloom: '0',
          brew: '0'
        },
        {
          name: 'Chemex',
          url: '/chemex',
          grind: '20',
          ratio: '2',
          bloom: '0',
          brew: '0'
        },
        {
          name: 'Aeropress',
          url: '/aeropress',
          grind: '13',
          ratio: '2',
          bloom: '0',
          brew: '0'
        },
        {
          name: 'Cold Brew (Breville)',
          url: '/cold-brew-breville',
          grind: '13',
          ratio: '2',
          bloom: '0',
          brew: '0'
        },
        {
          name: 'Cold Brew (OXO)',
          url: '/cold-brew-oxo',
          grind: '13',
          ratio: '2',
          bloom: '0',
          brew: '0'
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <AppBar
          title="Café"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          showMenuIconButton={false}
          onTitleClick={() => this.props.history.push('/')}
        />
        <Route
          path="/"
          render={() => <Main types={this.state.types} />}
        />
        <Route
          path="/:type"
          render={() => <Selection types={this.state.types} />}
        />

        {/* <BottomNavBar /> */}
      </div>
    )
  }
}

export default withRouter(App)

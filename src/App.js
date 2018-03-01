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
          type: 'Drip',
          grind: '13',
          ratio: '2',
          bloom: '0',
          brew: '0'
        },
        {
          type: 'Chemex',
          grind: '20',
          ratio: '2',
          bloom: '0',
          brew: '0'
        },
        {
          type: 'Aeropress',
          grind: '13',
          ratio: '2',
          bloom: '0',
          brew: '0'
        },
        {
          type: 'Cold Brew (Breville)',
          grind: '13',
          ratio: '2',
          bloom: '0',
          brew: '0'
        },
        {
          type: 'Cold Brew (OXO)',
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
        <Switch>
          <Route exact path="/" render={() => <Main styles={this.state.styles} />} />
          <Route
            path="/:type"
            render={() => <Selection styles={this.state.styles} />}
          />
        </Switch>
        {/* <BottomNavBar /> */}
      </div>
    )
  }
}

export default withRouter(App)

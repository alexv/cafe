import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { deepOrange700 } from 'material-ui/styles/colors'

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: deepOrange700
  }
})

ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <Router>
      <App />
    </Router>
  </MuiThemeProvider>,
  document.getElementById('root')
)
registerServiceWorker()

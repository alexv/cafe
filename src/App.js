import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      type: ''
    }
  }
  render() {
    return (
      <div className="App">
        <h1>Café</h1>
        <h3>What café will you make today?</h3>
        <select>
          <option>Drip</option>
          <option>Chemex</option>
          <option>Aeropress</option>
          <option>Cold Brew (Breville)</option>
          <option>Cold Brew (OXO)</option>
        </select>
        <h3>Grind Setting</h3>
        <p>13</p>
        <h3>Water and Coffee</h3>
        <table>
          <tbody>
            <tr>
              <th>Water (oz)</th>
              <th>Coffee (g)</th>
            </tr>
            <tr>
              <td>12</td>
              <td>30</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default App

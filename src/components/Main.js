import React, { Component } from 'react'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 1
    }
  }

  handleChange = (event, index, value) => this.setState({ value })
  render() {
    return (
      <div>
        <h3>What café will you make today?</h3>
        <SelectField
          floatingLabelText="Type"
          value={this.state.value}
          onChange={this.handleChange}
        >
          <MenuItem value={1} primaryText="Drip" />
          <MenuItem value={2} primaryText="Chemex" />
          <MenuItem value={3} primaryText="Aeropress" />
          <MenuItem value={4} primaryText="Cold Brew (Breville)" />
          <MenuItem value={5} primaryText="Cold Brew (OXO)" />
        </SelectField>
      </div>
    )
  }
}

export default Main

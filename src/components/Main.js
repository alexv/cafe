import React, { Component } from 'react'
import { withRouter } from 'react-router'

import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: null
    }
  }

  componentDidMount() {
    this.setState({ value: this.props.location.pathname })
  }

  handleChange = (event, index, value) => {
    if (value) {
      this.setState({ value })
      this.props.history.push(value)
    } else {
      this.setState({ value: null })
      this.props.history.push('/')
    }
  }
  render() {
    return (
      <div>
        <h3>What café will you make today?</h3>
        <SelectField
          floatingLabelText="Go wild"
          value={this.state.value}
          onChange={this.handleChange}
        >
          <MenuItem value={null} primaryText="" />
          {this.props.types.map(type => (
            <MenuItem key={type.url} value={type.url} primaryText={type.name} />
          ))}
        </SelectField>
      </div>
    )
  }
}

export default withRouter(Main)

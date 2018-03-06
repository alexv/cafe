import React, { Component } from 'react'
import { withRouter } from 'react-router'

import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

import Selection from './Selection'

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: null
    }
  }

  componentDidMount() {
    if (this.props.location.pathname !== '/') {
      this.setState({ value: this.props.location.pathname })
    }
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
    const selection = this.props.types.find(
      type => type.url === this.state.value
    )
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
        {this.state.value && <Selection selection={selection} />}
      </div>
    )
  }
}

export default withRouter(Main)

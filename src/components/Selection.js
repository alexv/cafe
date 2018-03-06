import React from 'react'
import { withRouter } from 'react-router'
import RaisedButton from 'material-ui/RaisedButton'

const Selection = props => {
  const selection = props.types.find(
    type => type.url === '/' + props.match.params.type
  )
  console.log(selection)
  return (
    <div style={{ width: '256px' }}>
      <h3>Preparation</h3>
      <ul>
        <li>Coffee: {selection.defaultCoffeeGrams}g</li>
        <li>Grind: {selection.grind}</li>
        <li>Water: {selection.defaultCoffeeGrams * selection.ratio}g</li>
      </ul>
      <br />
      <RaisedButton label="Brew!" primary={true} fullWidth={true} />
    </div>
  )
}

export default withRouter(Selection)

import React from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton'

const Selection = props => {
  const selection = props.types.find(
    type => type.url === '/' + props.match.params.type
  )
  return (
    <div style={{ width: '256px' }}>
      <h3>Preparation</h3>
      <ul>
        <li>Coffee: {selection.defaultCoffeeGrams}g</li>
        <li>Grind: {selection.grind}</li>
        <li>
          Water: {selection.defaultCoffeeGrams * selection.ratio}g /{' '}
          {(selection.defaultCoffeeGrams * selection.ratio * 0.0338).toFixed(1)}oz.
        </li>
      </ul>
      <br />
      <Link to={props.location.pathname + '/brew'}>
        <RaisedButton label="Brew!" primary={true} fullWidth={true}/>
      </Link>
    </div>
  )
}

export default withRouter(Selection)

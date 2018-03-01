import React from 'react'
import { withRouter } from 'react-router'

const Selection = props => {
  console.log(props)
  return <div>{props.match.params.type}</div>
}

export default withRouter(Selection)

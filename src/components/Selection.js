import React from 'react'
import { withRouter } from 'react-router'

const Selection = props => {
  const selection = props.types.find(
    type => type.url === '/' + props.match.params.type
  )
  console.log(selection)
  return <div>{JSON.stringify(selection)}</div>
}

export default withRouter(Selection)

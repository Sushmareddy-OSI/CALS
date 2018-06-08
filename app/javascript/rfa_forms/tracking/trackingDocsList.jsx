import React from 'react'
import PropTypes from 'prop-types'
import Immutable from 'immutable'

const TrackingDocsList = ({
  documents
}) => {
  return (
    <tr>
      <td>{documents.title}</td>
      <td>{''}</td>
      <td>{''}</td>
      <td>{''}</td>
    </tr>
  )
}

TrackingDocsList.defaultProps = {
  
}
export default TrackingDocsList

import React from 'react'
import PropTypes from 'prop-types'
import Immutable from 'immutable'

const TrackingTable = ({
  documents,
  CardHeader
}) => {
  return (
    <div className='container'>
      <div className='rfa01a-list table-responsive'>
        <h3>{CardHeader}</h3>
        <table className='table table-hover'>
          <thead>
            <tr>
              <th scope='col'>Family Documents</th>
              <th scope='col'>Received</th>
              <th scope='col'>Notes</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.trackingDetails.map((documents, index) => {
                <TrackingDocsList
                  key={index}
                  documentDetails={documents}
                />
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

TrackingTable.defaultProps = {
  CardHeader
}

export default TrackingTable
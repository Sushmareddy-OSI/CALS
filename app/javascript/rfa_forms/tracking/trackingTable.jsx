import React from 'react'
import PropTypes from 'prop-types'
import Immutable from 'immutable'
import TrackingListRowsEdit from './trackingListRowsEdit'
import TrackingListRowsShow from './trackingListRowsShow'

const TrackingTable = ({
  CardHeader,
  trackingDocuments,
  editMode
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
              trackingDocuments.map((docs, index) => {
                return editMode
                  ? <TrackingListRowsEdit
                    key={index}
                    docs={docs}
                  /> : <TrackingListRowsShow
                    key={index}
                    docs={docs}
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
  CardHeader: '',
  editMode: false
}

export default TrackingTable

import React from 'react'
import PropTypes from 'prop-types'
import Immutable from 'immutable'
import TrackingListRows from './trackingListRows'

const TrackingTable = ({
  CardHeader,
  trackingDocuments
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
              familyDocuments.map((docs, index) => {
                console.log(docs)
                return(
                  <TrackingListRows 
                    key={index}
                    docs={docs}
                  />
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

TrackingTable.defaultProps = {
  CardHeader: ''
}

export default TrackingTable
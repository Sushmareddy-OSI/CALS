import React from 'react'
import PropTypes from 'prop-types'
import Immutable from 'immutable'
import TrackingDocsList from './trackingDocsList'

export default class TrackingDocuments extends React.Component {
  render () {
    debugger
    return (
      <div className='container'>
        <div className='rfa01a-list table-responsive'>
          <h3>{this.props.CardHeader}</h3>
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
}

TrackingDocuments.defaultProps = {
  trackingDetails: [],
  CardHeader: 'Family RFA Documents'
}

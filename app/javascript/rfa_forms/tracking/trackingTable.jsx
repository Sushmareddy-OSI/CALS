import React from 'react'
import PropTypes from 'prop-types'
import Immutable from 'immutable'
import TrackingListRowsEdit from './trackingListRowsEdit'
import TrackingListRowsShow from './trackingListRowsShow'

const TrackingTable = ({
  CardHeader,
  trackingDocuments,
  editMode,
  inputValues,
  handleChange,
  colHeaders
}) => {
  console.log(trackingDocuments)
  return (
    <div className='container'>
      <div className='rfa01a-list table-responsive'>
        <h3>{CardHeader}</h3>
        <table className='table table-hover'>
          <thead>
            <tr>
              {
                colHeaders.map((header, index) => {
                  return (
                    <th key={index} scope='col'>{header}</th>
                  )
                })
              }
            </tr>
          </thead>
          <tbody>
            {
              trackingDocuments && trackingDocuments.map((docs, index) => {
                return editMode
                  ? <TrackingListRowsEdit
                    inputValues={inputValues}
                    key={index}
                    handleChange={handleChange}
                    docs={docs}
                  /> : <TrackingListRowsShow
                    inputValues={inputValues}
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
  editMode: false,
  colHeaders: ['Training', 'Expiration', 'Notes']
}

export default TrackingTable

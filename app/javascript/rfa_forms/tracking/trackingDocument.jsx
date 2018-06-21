import React from 'react'
import PropTypes from 'prop-types'
import Immutable from 'immutable'
import TrackFaciltyDocs from './trackFaciltyDocs'
import TrackPeopleDocs from './trackPeopleDocs'

export default class TrackingDocument extends React.Component {
  render () {
    const peopleDocuments = this.props.trackingDocuments.get('people_documents')
    const facilityDocuments = this.props.trackingDocuments.get('facility_documents')
    return (
      <div className='tracking-edit'>
        <div className='facility_documents'>
          <TrackFaciltyDocs
            tableTitle={''}
            trackingDocuments={facilityDocuments}
            editMode={this.props.editMode}
          />
        </div>
        <div className='people_documents'>
          {
            peopleDocuments.map((docs, index) => {
              console.log(docs.toJS())
              return (
                <TrackPeopleDocs
                  tableTitle={docs.get('person_type')}
                  key={index}
                  peopleDocument={docs}
                />
              )
            })
          }
        </div> 
      </div>
    )
  }
}

TrackingDocument.defaultProps = {
}

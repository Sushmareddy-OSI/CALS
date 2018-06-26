import React from 'react'
import PropTypes from 'prop-types'
import Immutable from 'immutable'
import TrackFacilityDocs from './trackFacilityDocs'
import TrackPeopleDocs from './trackPeopleDocs'

export default class TrackingDocument extends React.Component {
  render () {
    return (
      <div className='rfa-tracking'>
        <TrackFacilityDocs
          facilityName={this.props.facilityName }
          setParentState={this.props.setParentState}
          trackingDocuments={this.props.trackingDocuments.facility_documents}
          editMode={this.props.editMode} />

        {
          <TrackPeopleDocs
            setParentState={this.props.setPeopleDocumentsState}
            trackingDocuments={this.props.trackingDocuments}
            editMode={this.props.editMode}
          />
        }
      </div>
    )
  }
}

TrackingDocument.defaultProps = {
}

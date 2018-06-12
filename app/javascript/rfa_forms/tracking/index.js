import React from 'react'
import Immutable from 'immutable'
import TrackingDocument from './trackingDocument'

import TrackFaciltyDocs from './trackFaciltyDocs'
import TrackPeopleDocs from './trackPeopleDocs'

export default class TrackingList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      user: this.props.user,
      rfa_application: this.props.rfa_application,
      tracking: this.props.tracking
    }
  }

  render () {
    const trackingDocuments = this.state.tracking.tracking_documents
    const peopleDocuments = trackingDocuments.people_documents
    return (
      <div className='tracking_page'>
        <div className='facility_documents'>
          <TrackingDocument
            trackingDocuments={trackingDocuments}
            editMode
          />
        </div>
        {/* <div className='people_documents'>
          {
            peopleDocuments.map((docs, index) => {
              return (
                <TrackPeopleDocs
                  key={index}
                  trackingDocuments={docs}
                />
              )
            })
          }
        </div> */}

      </div>
    )
  }
}

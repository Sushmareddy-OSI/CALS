import React from 'react'
import PropTypes from 'prop-types'
import Immutable from 'immutable'
import TrackFacilityDocs from './trackFacilityDocs'
import TrackPeopleDocs from './trackPeopleDocs'

export default class TrackingDocument extends React.Component {
  constructor (props) {
    super(props)
    this.updatePeopleDocuments = this.updatePeopleDocuments.bind(this)
  }
  updatePeopleDocuments (key, value, index) {
    let peopleDocuments = this.props.trackingImmutable.get('people_documents')
    let newPeopleDocuments = peopleDocuments.update(index, x => x.set(key, value))
    this.props.setTrackingPeopleState('people_documents', newPeopleDocuments)
  }
  render () {
    const peopleDocuments = this.props.trackingImmutable.get('people_documents')
    return (
      <div className='rfa01a-list'>
        <div className='tracking-card-header'>
          <h3>{this.props.facilityName + ' Family RFA Documents'}</h3>
        </div>
        <TrackFacilityDocs
          setParentState={this.props.setParentState}
          trackingDocuments={this.props.trackingDocuments.facility_documents}
          editMode={this.props.editMode} 
        />
        <div className='people_documents'>
          {
            peopleDocuments.map((docs, index) => {            
              return (
                <TrackPeopleDocs
                  tableTitle={docs.get('person_type')}
                  setPeopleDocuments={this.updatePeopleDocuments}
                  key={index}
                  personName={docs.get('person_name')}
                  index={index}
                  peopleDocument={docs}
                  editMode={this.props.editMode}
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

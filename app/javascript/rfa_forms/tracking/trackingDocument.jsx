import React from 'react'
import PropTypes from 'prop-types'
import Immutable from 'immutable'
import TrackFaciltyDocs from './trackFaciltyDocs'
import TrackPeopleDocs from './trackPeopleDocs'

export default class TrackingDocument extends React.Component {
  constructor (props) {
    super(props)
    this.updatePeopleDocuments = this.updatePeopleDocuments.bind(this)
  }
  updatePeopleDocuments (key, value, index) {
    let peopleDocuments = this.props.trackingDocuments.get('people_documents')
    let newPeopleDocuments = peopleDocuments.update(index, x => x.set(key, value))
    this.props.setParentState('people_documents', newPeopleDocuments)
  }
  render () {
    const peopleDocuments = this.props.trackingDocuments.get('people_documents')
    const facilityDocuments = this.props.trackingDocuments.get('facility_documents')
    return (
      <div className='rfa01a-list'>
        {/*<div className='facility_documents'>
          <TrackFaciltyDocs
            tableTitle={''}
            trackingDocuments={facilityDocuments}
            editMode={this.props.editMode}
          />
        </div>*/}
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

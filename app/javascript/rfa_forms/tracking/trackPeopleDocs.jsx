import React from 'react'
import PropTypes from 'prop-types'
import Immutable from 'immutable'
import _ from 'lodash'
import TrackingTable from './trackingTable'

export default class TrackPeopleDocs extends React.Component {
  render () {
    const facilityDocuments = this.props.trackingDocuments
    const familyDocuments = facilityDocuments.family_documents.items
    const assessmentDocuments = facilityDocuments.assessments.items
    const taskAndTrainingDocuments = facilityDocuments.tasks_and_trainings.items

    return (
      <div>
        {/* Iterative array to be created */}
        {/*
          familyDocuments.map((list, index) => {
            return (
              <TrackingTable
                key={index}
                trackingDocuments={list}
              />
            )
          })
        */}
        <TrackingTable
          trackingDocuments={familyDocuments}
          editMode={this.props.editMode}
        />
      </div>
    )
  }
}

TrackPeopleDocs.defaultProps = {
  trackingDocuments: []
}

import React from 'react'
import PropTypes from 'prop-types'
import Immutable from 'immutable'
import _ from 'lodash'
import TrackingListRows from './trackingListRows'
import TrackingTable from './trackingTable'

export default class TrackingDocuments extends React.Component {
  render () {
    const array = []
    const tacking = this.props.trackingDocuments
    const familyDocuments = tacking.facility_documents.family_documents.items
    const assessmentsDocuments = tacking.facility_documents.assessments.items
    const tasksAndTrainingsDocuments = tacking.facility_documents.tasks_and_trainings.items

    const trackingList = _.concat(array, familyDocuments,
      assessmentsDocuments, [tasksAndTrainingsDocuments])
    return (
      <div>
        {
          trackingList.map((list) => {
            <TrackingTable 
              trackingDocuments={list}
            />
          })
        }
      </div>
    )
  }
}

TrackingDocuments.defaultProps = {
  trackingDetails: [],
  CardHeader: 'Family RFA Documents'
}

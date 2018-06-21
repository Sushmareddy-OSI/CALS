import React from 'react'
import PropTypes from 'prop-types'
import Immutable from 'immutable'
import _ from 'lodash'
import TrackingTable from './trackingTable'

export default class TrackPeopleDocs extends React.Component {
  render () {
    const personDocuments = this.props.peopleDocument.get('person_documents')
    return (
      <div>
        <div>
          <h3>{this.props.tableTitle}</h3>
        </div>
        <TrackingTable
          trackingDocuments={personDocuments.getIn(['individual_documents', 'items'])}
          editMode={this.props.editMode}
        />
        <TrackingTable
          trackingDocuments={personDocuments.getIn(['trainings', 'items'])}
          editMode={this.props.editMode}
        />
        <TrackingTable
          trackingDocuments={personDocuments.getIn(['clearances', 'items'])}
          editMode={this.props.editMode}
        />
      </div>
    )
  }
}


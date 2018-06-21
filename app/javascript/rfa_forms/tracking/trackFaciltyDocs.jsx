import React from 'react'
import PropTypes from 'prop-types'
import Immutable from 'immutable'
import _ from 'lodash'
import TrackingTable from './trackingTable'

export default class TrackFaciltyDocs extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      textAreaValue: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange (value) {
    this.setState({
      textAreaValue: value
    })
  }
  render () {
    const familyDocuments = this.props.trackingDocuments.get('family_documents')
    //const familyDocuments = facilityDocuments.family_documents.items
    //const assessmentDocuments = facilityDocuments.assessments.items
    //const taskAndTrainingDocuments = facilityDocuments.tasks_and_trainings.items

    return (
      <div>
        <div>
          <h3>{this.props.tableTitle}</h3>
        </div>
        <TrackingTable
          handleChange={this.handleChange}
          inputValues={this.state}
          trackingDocuments={familyDocuments.get('items')}
          editMode={this.props.editMode}
        />
      </div>
    )
  }
}


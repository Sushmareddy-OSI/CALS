import React from 'react'
import PropTypes from 'prop-types'
import Immutable from 'immutable'
import TrackingTable from './trackingTable'

export default class TrackPeopleDocs extends React.Component {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange (key, value) {
    let personDocuments = this.props.peopleDocument.get('person_documents')
    let newPersonDocuments = personDocuments.set(key, value)
    this.props.setPeopleDocuments('person_documents', newPersonDocuments, this.props.index)
  }
  render () {
    const personDocuments = this.props.peopleDocument.get('person_documents')
    console.log(personDocuments.toJS())
    return (
      <div>
        <div>
          <h3>{this.props.tableTitle}</h3>
        </div>
        <TrackingTable
          colHeaders={['individual Documents', 'Started', 'completed', 'Notes']}
          trackingDocuments={personDocuments.getIn(['individual_documents', 'items'])}
          tableName='individual_documents'
          editMode={this.props.editMode}
          handleChange={this.handleChange}
        />
        <TrackingTable
          colHeaders={['Training', '', 'Expiration', 'Notes']}
          trackingDocuments={personDocuments.getIn(['trainings', 'items'])}
          editMode={this.props.editMode}
          tableName='trainings'
          handleChange={this.handleChange}
        />
        <TrackingTable
          colHeaders={['Clearances', 'Started', 'completed', 'Notes']}
          trackingDocuments={personDocuments.getIn(['clearances', 'items'])}
          editMode={this.props.editMode}
          tableName='clearances'
          handleChange={this.handleChange}
        />
      </div>
    )
  }
}


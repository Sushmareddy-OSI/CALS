import React from 'react'
import Immutable from 'immutable'
import TrackingDocuments from './trackingDocuments.jsx'
import TrackingTable from './trackingTable.jsx'

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
    return (
      <div className='tracking_page'>
        <TrackingDocuments
          applicationDetails={this.state.rfa_application}
          trackingDocuments={trackingDocuments}
        />
      </div>
    )
  }
}

import React from 'react'
import Immutable from 'immutable'
import TrackingDocuments from './trackingDocuments.jsx'

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
    return (
      <div className='tracking_page'>
        <TrackingDocuments
          applicationDetails={this.state.rfa_application}
          trackingDetails={this.state.tracking}
        />
      </div>
    )
  }
}

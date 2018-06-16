import React from 'react'
import Immutable from 'immutable'
import TrackingDocument from './trackingDocument'
import CardsGroupLayout from 'components/common/cardsGroupLayout.js'
import Button from 'components/common/button'
import LogoHeader from 'components/common/logoHeader'
import PageHeader from 'components/common/pageHeader'
import BreadCrumb from 'components/common/breadCrumb'
import TrackingButtons from 'components/common/pageHeaderButtons/trackingButtons'
import {urlPrefixHelper} from 'helpers/url_prefix_helper.js.erb'
import {fetchRequest} from 'helpers/http'

export default class TrackingList extends React.Component {
  constructor (props) {
    super(props)
    this.saveProgress = this.saveProgress.bind(this)
    this.editProgress = this.editProgress.bind(this)
    this.setApplicationState = this.setApplicationState.bind(this)

    this.state = {
      user: this.props.user,
      rfaApplication: this.props.rfaApplication,
      tracking: this.props.tracking,
      cardBeingEdited: false
    }
  }

  editProgress (event) {
    this.setState({ cardBeingEdited: true })
  }

  saveProgress (event) {
    this.setState({ cardBeingEdited: false })
    const url = '/rfa/a01/' + this.state.rfaApplication.id + '/tracking/' + this.state.tracking.id
    fetchRequest(url, 'PUT', this.state.tracking)
      .then((response) => {
        return response.json()
      }).catch((errors) => {
        this.setState({
          errors: errors
        })
      })
  }

  setApplicationState (key, value) {
    let newState = Immutable.fromJS(this.state)
    newState = newState.setIn(['tracking', 'tracking_documents', 'facility_documents', key], value)
    this.setState(newState.toJS())
  }

  render () {
    const trackingDocuments = this.state.tracking.tracking_documents
    return (
      <div className='tracking_page'>
        <PageHeader
          headerLabel='RFA Tracking'
          pageHeaderButtons={
            <TrackingButtons
              saveProgress={this.saveProgress}
              editProgress={this.editProgress} />} />
        <BreadCrumb
          navigationElements={[<a href={urlPrefixHelper('/')}>RFA Application list</a>]} />
        <CardsGroupLayout>
          <TrackingDocument
            setParentState={this.setApplicationState}
            trackingDocuments={trackingDocuments}
            editMode={this.state.cardBeingEdited} />
        </CardsGroupLayout>
      </div>
    )
  }
}

TrackingList.defaultProps = {
  tracking: {},
  rfaApplication: {}
}

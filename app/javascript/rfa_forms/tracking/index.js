import React from 'react'
import Immutable from 'immutable'
import TrackingDocument from './trackingDocument'
import CardsGroupLayout from 'components/common/cardsGroupLayout.js'
import Button from 'components/common/button'
import LogoHeader from 'components/common/logoHeader'
import PageHeader from 'components/common/pageHeader'
import BreadCrumb from 'components/common/breadCrumb'
import {urlPrefixHelper} from 'helpers/url_prefix_helper.js.erb'
import {fetchRequest} from 'helpers/http'

export default class TrackingList extends React.Component {
  constructor (props) {
    super(props)
    this.saveProgress = this.saveProgress.bind(this)
    this.state = {
      user: this.props.user,
      rfa_application: this.props.rfa_application,
      tracking: this.props.tracking,
      CardBeingedited: ''
    }
  }
  saveProgress () {
    const url = '/rfa/a01/' + this.state.rfa_application.id + '/tracking/' + this.state.tracking.id
    fetchRequest(url, 'PUT', this.state.tracking)
      .then((response) => {
        return response.json()
      }).catch((errors) => {
        this.setState({
          errors: errors
        })
      })
  }

  render () {
    const trackingDocuments = this.state.tracking.tracking_documents
    return (
      <div className='tracking_page'>
        <PageHeader
          headerLabel='RFA Tracking'
          pageHeaderButtons={
            <Button
              buttonId='saveProgress'
              label='Save '
              textAlignment='right'
              onClick={this.saveProgress}
            />}
        />
        <BreadCrumb
          navigationElements={[<a href={urlPrefixHelper('/')}>RFA Application list</a>]} />
        <CardsGroupLayout>
          <TrackingDocument
            trackingDocuments={trackingDocuments}
            editMode={false}
          />
          <TrackingDocument
            trackingDocuments={trackingDocuments}
            editMode
          />
        </CardsGroupLayout>
      </div>
    )
  }
}

TrackingList.defaultProps = {
  tracking: {},
  rfa_application: {}
}

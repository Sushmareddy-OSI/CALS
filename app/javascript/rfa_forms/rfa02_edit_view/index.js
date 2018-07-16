import React from 'react'
import {rfa02Object} from './dontCommit'
import BreadCrumb from 'components/common/breadCrumb'
import {urlPrefixHelper} from 'helpers/url_prefix_helper.js.erb'
import CriminalBackgroudDocument from './criminalBackgroudDocument'
export default class Rfa02Edit extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			rfa_02_application: rfa02Object
		}
		console.log(this.state)
	}
	render () {
		return (
			<div id='rfa-02-edit'>
				<BreadCrumb
		          navigationElements={[<a href={urlPrefixHelper('/')}>RFA Application list</a>]} />
		        <div className='container'>
		          <div className='row'>

		            <div className='form-section col-xs-12 col-sm-12 col-md-12 col-lg-12'>
		              <div className='left-content col-xs-3 col-sm-3 col-md-3 col-lg-3'>
		                {/*<TrackingSideBar
		                  handleHrefClick={this.handleHrefClick}
		                  facilityName={facilityName}
		                  tracking={trackingDocuments} />*/}
		              </div>
		              <div className='col-xs-9 col-sm-9 col-md-9 col-lg-9'>
		                <CriminalBackgroudDocument 

		                />
		              </div>
		            </div>
		          </div>
		        </div>
			</div>
		)
	}
}
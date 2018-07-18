import React from 'react'
import PropTypes from 'prop-types'
import EmergencyPlacement from './emergencyPlacement'
import LiveScan from './liveScan'
import OtherResources from './otherResources'
import InterCountyTransfer from './interCountyTransfer'
import Exemptions from './exemptions'
import OutOfStateRegistryCheck from './outOfStateRegistryCheck'

export default class CriminalBackgroudDocument extends React.Component {
	render () {
		const peopleList = this.props.people
		return (
			peopleList.map((person, index) => {
				return (
					<div key={index} className='rfa-tracking col-xs-12'> 
						<div className='tracking-card row'>
							<div className='tracking-card-header people_documents'>
			                  <h3>{person.person_type + ': ' + person.person_name + ' RFA Documents'}</h3>
			                </div>
			                <div className='tracking-table'>
			                	<EmergencyPlacement 
			                		peopleIndex={index}
			                		emergencyPlacementList={person.background_check.emergency_placement_only}
			                		editMode={this.props.editMode}
			                	/>
			                	<LiveScan 
		                			peopleIndex={index}
			                		liveScanList={person.background_check.live_scan}
			                		editMode={this.props.editMode}
			                	/>
			                	<OtherResources 
			                		peopleIndex={index}
			                		otherResourcesList={person.background_check.other_resources}
			                		editMode={this.props.editMode}
			                	/>
			                	<InterCountyTransfer 
			                		peopleIndex={index}
			                		countyTrasferList={person.background_check.inter_county_transfer}
			                		editMode={this.props.editMode}
		                		/>
			                	<Exemptions
			                		editMode={this.props.editMode}
		                		/>
			                	<OutOfStateRegistryCheck
			                		stateRegisties={person.background_check.out_of_state_registry_checklist.state_registries} 
			                		editMode={this.props.editMode}
			                	/>
			                </div>
						</div>
					</div>
				)
			}) 
		)
	}
}


CriminalBackgroudDocument.defaultProps = {
	people: []
}
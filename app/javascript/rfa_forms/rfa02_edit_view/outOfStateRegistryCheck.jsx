import React from 'react'
import PropTypes from 'prop-types'
import YesNoRadioComponent from 'components/common/yesNoFields'
import DateNoteFields from './exemptionCommon'
import CheckListTable from './checkListTable'
import CheckListRow from './backGroundCheckRows/checkListRow'

export default class OutOfStateRegistryCheck extends React.Component {
	render () {
		return (
			<div>
				<div className='tracking-card-header'>
					<h3>Resource Family Out-of-State Child Abuse Registry Checklist</h3>
				</div>
				{
					this.props.stateRegisties.map((stateData, index) => {
						console.log(stateData)
						return (
							<div key={index}>
								<div>
									<p>{stateData.state.value + 'Information'}</p>
								</div>
								<YesNoRadioComponent
				            		label={'Is registry maintained by ' + stateData.state.value + '?'}
				            		gridClassName='col-xs-12 no-padding'
				            		value={true}
				            		onFieldChange={(event) => {console.log('emergency')}}
				            	/>
				            	<CheckListTable 
						  		  colHeaders={['', 'Date', 'Notes']}
				                  rowsComponent={
				                    <CheckListRow
				                      peopleIndex={0}
				                      handleChange={this.handleEmergencyPlacementChange}
				                      checkListDocuments={stateData.registry_info || undefined}
				                      editMode={true}
			                      	/>
			                      } 
		                      	/>
		                    	<YesNoRadioComponent 
				            		label='Was the request cleared or not cleared?'
				            		gridClassName='col-xs-12 no-padding'
				            		value={true}
				            		onFieldChange={(event) => {console.log('emergency')}}
				            	/>
				            	<DateNoteFields />  
							</div>
						)
					})
				}
			</div>
		)
	}
}
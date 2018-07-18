import React from 'react'
import PropTypes from 'prop-types'
import YesNoRadioComponent from 'components/common/yesNoFields'
import CheckListTable from './checkListTable'
import CheckListRow from './backGroundCheckRows/checkListRow'

export default class EmergencyPlacement extends React.Component {
	render () {
		return (
			<div>
				{this.props.editMode ? <YesNoRadioComponent 
            		label='is this an emergency placement?'
            		gridClassName='col-xs-12 no-padding'
            		value={true}
            		onFieldChange={(event) => {console.log('emergency')}}
            	/> : <YesNoRadioComponentShow /> }

            	{this.props.emergencyPlacementList.is_emergency || true ?
            		<CheckListTable 
			  		  colHeaders={['Emergency Placement Only', 'Date', 'Notes']}
	                  rowsComponent={
	                    <CheckListRow
	                      peopleIndex={0}
	                      handleChange={this.handleEmergencyPlacementChange}
	                      checkListDocuments={this.props.emergencyPlacementList}
	                      editMode={true} />
	                  } 
                    /> : null
            	}
			</div>
		)
	}

}

EmergencyPlacement.defaultProps = {

}
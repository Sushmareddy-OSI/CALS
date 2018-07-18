import React from 'react'
import CheckListTable from './checkListTable'
import CheckListRow from './backGroundCheckRows/checkListRow'

export default class OtherResources extends React.Component {
	render () {
		return (
			<div>
				<CheckListTable 
					colHeaders={['Other Resources', 'Date', 'Notes']}
					rowsComponent={
	                    <CheckListRow
	                      peopleIndex={0}
	                      handleChange={this.handleEmergencyPlacementChange}
	                      checkListDocuments={this.props.otherResourcesList}
	                      editMode={true}
                       />
                  	} 
				/>
			</div>
		)
	}
}
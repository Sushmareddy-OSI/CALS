import React from 'react'
import CheckListTable from './checkListTable'
import CheckListRow from './backGroundCheckRows/checkListRow'

export default class InterCountyTransfer extends React.Component {
	render () {
		return (
			<div>
				<CheckListTable 
					colHeaders={['Inter-County Transfer', 'Date', 'Notes']}
					rowsComponent={
	                    <CheckListRow
	                      peopleIndex={0}
	                      handleChange={this.handleEmergencyPlacementChange}
	                      checkListDocuments={this.props.countyTrasferList || []}
	                      editMode={true}
                       />
                  	} 
				/>
			</div>
		)
	}
}
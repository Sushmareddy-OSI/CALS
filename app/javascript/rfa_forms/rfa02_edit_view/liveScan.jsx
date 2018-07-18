import React from 'react'
import CheckListTable from './checkListTable'
import LiveScanRow from './backGroundCheckRows/liveScanRow'

export default class LiveScan extends React.Component {
	render () {
		return (
			<div>
				<CheckListTable 
					colHeaders={['Live Scan', 'Submitted', 'Received', 'Notes']}
					rowsComponent={
	                    <LiveScanRow
	                      peopleIndex={0}
	                      handleChange={this.handleEmergencyPlacementChange}
	                      checkListDocuments={this.props.liveScanList || []}
	                      editMode={true}
                       />
                  	} 
				/>
			</div>
		)
	}
}
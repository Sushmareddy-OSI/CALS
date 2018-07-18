import React from 'react'
import PropTypes from 'prop-types'
import YesNoRadioComponent from 'components/common/yesNoFields'
import DateNoteFields from './exemptionCommon'

export default class Exemptions extends React.Component {
	render () {
		return (
			<div>
				<div className='tracking-card-header'>
					<h3>Exemptions</h3>
				</div>
				<div className='col-xs-6'>
					{this.props.editMode ? <YesNoRadioComponent 
	            		label='Exemption requested by applicant?'
	            		gridClassName='col-xs-12 no-padding'
	            		value={true}
	            		onFieldChange={(event) => {console.log('emergency')}}
	            	/> : <YesNoRadioComponentShow /> }
	            	{<DateNoteFields />}
				</div>
            	<div className='col-xs-6'>
            		{
            			<YesNoRadioComponent 
		            		label='Exemption requested by applicant?'
		            		gridClassName='col-xs-12 no-padding'
		            		value={true}
		            		onFieldChange={(event) => {console.log('emergency')}}
		            	/>
	            	}
            		<DateNoteFields />
            	</div>
			</div>
		)
	}
}
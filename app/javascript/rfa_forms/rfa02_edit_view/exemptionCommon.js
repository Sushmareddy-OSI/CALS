import React from 'react'
import PropTypes from 'prop-types'
import {DateField} from 'components/common/dateFields'
import {TextAreaComponent} from 'components/common/textArea'
import {FormatDateForDisplay} from 'helpers/commonHelper.jsx'

const DateNoteFields = ({
	dateValue,
	notesValue
}) => {
	return (
		<div> 
			<DateField
	            id={''}
	            value={dateValue}
	            onChange={(event) => console.log('hi')} 
	        />
	        <TextAreaComponent
		        id={''}
		        value={notesValue}
		        onChange={(event) => handleChange('notes', event.target.value, index)} 
	        />
    	</div>
	)
}

DateNoteFields.defaultProps = {
	dateValue: '',
	notesValue: ''
}

export default DateNoteFields
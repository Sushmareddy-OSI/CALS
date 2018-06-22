import React from 'react'
import PropTypes from 'prop-types'
import Immutable from 'immutable'
import {DateField} from 'components/common/dateFields'
import {TextAreaComponent} from 'components/common/textArea'
import {BinarySelectorField} from 'components/common/binarySelectorField'

const TrackingListRowsEdit = ({
  docs,
  index,
  handleChange,
  tableType
}) => {
  //console.log(docs.toJS())
  return (
    <tr>
      <td><BinarySelectorField
        key={index}
        id={tableType + 'checked' + index}
        type='checkbox'
        defaultChecked={docs.get('checked')}
        gridClassName='inlineBlock'
        onChange={(event) => handleChange('checked', event.target.checked, index)}
        value={docs.get('checked')}
        label={docs.get('title')}/>
      </td>
      <td>
        <DateField
          index={index}
          id={tableType + 'start_date' + index}
          value={docs.get('start_date')}
          onChange={(event)  => handleChange('start_date', event.target.value, index)}
        />
      </td>
      <td>
        <DateField
          id={tableType + 'completion_date' + index}
          index={index}
          value={docs.get('completed_date')}
          onChange={(event)  => handleChange('completion_date', event.target.value, index)}
        />
      </td>
      <td>
        <TextAreaComponent
          id={tableType + 'notes' + index}
          index={index}
          value={docs.get('notes')}
          onChange={(event)  => handleChange('notes', event.target.value, index)}
        />
      </td>
    </tr>
  )
}

TrackingListRowsEdit.defaultProps = {
  docs: {
    'notes': '',
    'title': '',
    'checked': false
  }
}
export default TrackingListRowsEdit

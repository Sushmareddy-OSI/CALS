import React from 'react'
import PropTypes from 'prop-types'
import Immutable from 'immutable'
import {DateField} from 'components/common/dateFields'
import {TextAreaComponent} from 'components/common/textArea'
import {BinarySelectorField} from 'components/common/binarySelectorField'

const TrackingListRowsEdit = ({
  docs,
  index,
  handleChange
}) => {
  //console.log(docs.toJS())
  return (
    <tr>
      <td><BinarySelectorField
        key={index}
        id={docs.get('title') + index}
        type='checkbox'
        gridClassName='inlineBlock'
        onChange={(event) => handleChange('checked', event.target.checked, index)}
        value={docs.get('checked')}
        label={docs.get('title')}/>
      </td>
      <td>
        <DateField
          index={index}
          id={docs.get('title') + index}
          value={docs.get('completed_date')}
          onChange={(event)  => handleChange('started_date', event.target.value, index)}
        />
      </td>
      <td>
        <DateField
          id={docs.get('title') + index}
          index={index}
          value={docs.get('completed_date')}
          onChange={(event)  => handleChange('completed_date', event.target.value, index)}
        />
      </td>
      <td>
        <TextAreaComponent
          id={docs.get('title') + index}
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

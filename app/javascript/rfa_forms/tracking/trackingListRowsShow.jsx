import React from 'react'
import PropTypes from 'prop-types'
import Immutable from 'immutable'
import {BinarySelectorField} from 'components/common/binarySelectorField'

const TrackingListRowsShow = ({
  docs,
  index
}) => {
  return (
    <tr>
      <td><BinarySelectorField     
        key={index}
        checked={docs.get('checked')}
        disabled
        gridClassName='inlineBlock'
        id={docs.get('title') + index}
        value={docs.get('checked')}
        label={docs.get('title')}/>
      </td>
      <td>
        {docs.get('start_date')}
      </td>
      <td>
        {docs.get('completed_date')}
      </td>
      <td>
        {docs.get('notes')}
      </td>
    </tr>
  )
}

TrackingListRowsShow.defaultProps = {
  'notes': '',
  'title': '',
  'checked': false,
  'approved_date': '',
  'submitted_date': ''
}
export default TrackingListRowsShow

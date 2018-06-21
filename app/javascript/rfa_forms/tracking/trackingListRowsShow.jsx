import React from 'react'
import PropTypes from 'prop-types'
import Immutable from 'immutable'
import {BinarySelectorField} from 'components/common/binarySelectorField'

const TrackingListRowsShow = ({
  docs
}) => {
  return (
    <tr>
      <td><BinarySelectorField
        gridClassName='inlineBlock'
        value={docs.get('checked')}/>
      {docs.get('title')}
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

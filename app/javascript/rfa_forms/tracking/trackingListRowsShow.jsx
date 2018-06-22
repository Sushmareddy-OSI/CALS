import React from 'react'
import PropTypes from 'prop-types'
import Immutable from 'immutable'
import {BinarySelectorField} from 'components/common/binarySelectorField'

const TrackingListRowsShow = ({
  docs,
  index,
  tableType
}) => {
  console.log(docs.get('checked'))
  return (
    <tr>
      <td><BinarySelectorField     
        key={index}
        defaultChecked={docs.get('checked')}
        gridClassName='inlineBlock'
        id={tableType + docs.get('title') + index}
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

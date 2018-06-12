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
        onChange={(event) => { console.log('check') }}
        value={docs.checked}/>
      {docs.title}
      </td>
      <td>
        {docs.completed_date}
      </td>
      <td>
        {docs.notes}
      </td>
    </tr>
  )
}

TrackingListRowsShow.defaultProps = {

}
export default TrackingListRowsShow

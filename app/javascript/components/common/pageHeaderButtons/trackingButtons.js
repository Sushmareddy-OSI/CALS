import PropTypes from 'prop-types'
import React from 'react'
import Button from 'components/common/button'

const TrackingButtons = ({
  saveProgress,
   editProgress
}) => {
  return (
    <div>
      <div className='col-lg-2 col-md-2 col-sm-2 col-xs-2'>
        <Button
          buttonId='saveProgress'
          label='Save '
          textAlignment='right'
          onClick={saveProgress}
        />
      </div>
      <div className='col-lg-2 col-md-2 col-sm-2 col-xs-2'>
        <Button
          buttonId='editProgress'
          label='Edit'
          textAlignment='left'
          onClick={editProgress}
        />
      </div>
    </div>
  )
}

export default TrackingButtons

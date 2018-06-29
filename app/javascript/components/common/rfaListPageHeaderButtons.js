import PropTypes from 'prop-types'
import React from 'react'
import Button from 'components/common/button'

const RfaListPageHeaderButtons = ({
  disbaleRfaApplication,
  submit,
  checkForPriviliges,
  submitForSearch
}) => {
  return (
    <div className='col-xs-12 col-sm-6'>
      {
        checkForPriviliges
          ? <div className='col-xs-6'>
            <Button
              onClick={submitForSearch}
              label='Search for Facility'
            />
          </div> : null
      }
      {
        !disbaleRfaApplication
          ? <div className='col-xs-6'>
            <Button
              onClick={submit}
              label='Create RFA Application'
            />
          </div> : null
      }
    </div>

  )
}

export default RfaListPageHeaderButtons

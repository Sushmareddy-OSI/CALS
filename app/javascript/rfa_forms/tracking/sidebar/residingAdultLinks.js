import React from 'react'
import PropTypes from 'prop-types'

import {NavLink} from 'react-wood-duck'

const ResidingAdultLinks = ({
residingAdults,
clickHandler,
hrefPrefix
}) => {
  return (
    residingAdults.map((residingAdult, index) => {
      return (
        <div key={index}>
          <NavLink
            key={index}
            clickHandler={clickHandler}
            text={residingAdult.person_name}
            href={hrefPrefix} />
        </div>
      )
    })
  )
}

ResidingAdultLinks.propTypes = {
}

ResidingAdultLinks.defaultProps = {
}
export default ResidingAdultLinks

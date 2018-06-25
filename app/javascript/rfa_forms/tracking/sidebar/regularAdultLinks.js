import React from 'react'
import PropTypes from 'prop-types'

import {NavLink} from 'react-wood-duck'

const RegularAdultLinks = ({
regularAdults,
clickHandler,
hrefPrefix
}) => {
  return (
    regularAdults.map((regularAdult, index) => {
      return (
        <div key={index}>
          <NavLink
            key={index}
            clickHandler={clickHandler}
            text={regularAdult.person_name}
            href={hrefPrefix} />
        </div>
      )
    })
  )
}

RegularAdultLinks.propTypes = {
}

RegularAdultLinks.defaultProps = {
}
export default RegularAdultLinks

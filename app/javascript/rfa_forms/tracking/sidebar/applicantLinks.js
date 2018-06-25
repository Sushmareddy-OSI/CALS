import React from 'react'
import PropTypes from 'prop-types'

import {NavLink} from 'react-wood-duck'

const ApplicantLinks = ({
applicants,
clickHandler,
hrefPrefix
}) => {
  return (
    applicants.map((applicant, index) => {
      return (
        <div key={index}>
          <NavLink
            key={index}
            clickHandler={clickHandler}
            text={applicant.person_name}
            href={hrefPrefix} />
        </div>
      )
    })

  )
}
ApplicantLinks.propTypes = {

}

ApplicantLinks.defaultProps = {
}
export default ApplicantLinks

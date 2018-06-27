import React from 'react'
import PropTypes from 'prop-types'

import {NavLink} from 'react-wood-duck'

const ApplicantLinks = ({
applicants,
clickHandler,
hrefPrefix
}) => {
  debugger
  let applicants = applicants.apps
  let indexes = applicants.indexes
  return (
    applicants.map((applicant, index) => {
      return (
        <div key={index}>
          <NavLink
            key={index}
            clickHandler={() => clickHandler('#Applicant' + indexes[index] + '-tracking-card')}
            text={applicant.person_name}
            href={hrefPrefix + '#Applicant' + indexes[index] + '-tracking-card'} />
        </div>
      )
    })

  )
}
ApplicantLinks.propTypes = {

}

ApplicantLinks.defaultProps = {
  hrefPrefix: ''
}
export default ApplicantLinks

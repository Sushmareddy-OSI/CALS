import Immutable from 'immutable'
import React from 'react'
import Collapsible from 'react-collapsible'
import Affix from 'react-overlays/lib/AutoAffix'
import PropTypes from 'prop-types'
import {NavLinks} from 'react-wood-duck'
import {urlPrefixHelper} from 'helpers/url_prefix_helper.js.erb'
import ApplicantSideBar from './sidebar/applicantSideBarLinks'
import ResidingAdultSideBar from './sidebar/residingAdultLinks'
import RegularAdultSideBar from './sidebar/regularAdultLinks'

const APPLICANT_PERSON_TYPE = 'Applicant'
const RESIDING_PERSON_TYPE = 'Residing Adult'
const REGULAR_PERSON_TYPE = 'Present Adult'

export default class TrackingSideBar extends React.Component {
  constructor (props) {
    super(props)
  }

  checkPersonType (individualDocument, personType) {
    return individualDocument.person_type === personType
  }

  render () {
    let peopleDocs = this.props.tracking.people_documents
    return (

      <div className='col-sm-12'>
        <div className='nav-menu col-sm-10'>
          {/* affixStyles are in PX by default */}
          <Affix viewportOffsetTop={105} affixStyle={{top: 80}}>
            <div className='nav-menu' />
            <ApplicantSideBar applicants={peopleDocs.filter(checkPersonType)} />
            <ResidingAdultSideBar />
            <RegularAdultSideBar />
          </Affix>
        </div>

        <div className='col-sm-2'>
          <Affix>
            <hr className='vertical' />
          </Affix>
        </div>
      </div>
    )
  }
}

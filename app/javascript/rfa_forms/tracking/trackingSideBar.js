import Immutable from 'immutable'
import React from 'react'
import Collapsible from 'react-collapsible'
import Affix from 'react-overlays/lib/AutoAffix'
import PropTypes from 'prop-types'
import {NavLinks, NavLink} from 'react-wood-duck'
import {urlPrefixHelper} from 'helpers/url_prefix_helper.js.erb'
import ApplicantSideBar from './sidebar/applicantLinks'
import ResidingAdultSideBar from './sidebar/residingAdultLinks'
import RegularAdultSideBar from './sidebar/regularAdultLinks'

const APPLICANT_PERSON_TYPE = 'Applicant'
const RESIDING_PERSON_TYPE = 'Residing Adult'
const REGULAR_PERSON_TYPE = 'Present Adult'

export default class TrackingSideBar extends React.Component {
  constructor (props) {
    super(props)
    this.handleHrefClick = this.handleHrefClick.bind(this)
  }
  handleHrefClick () {

  }

  render () {
    let peopleDocs = this.props.tracking.people_documents
    return (
      <div className='nav-menu col-sm-12 pull-right'>
        <Affix
          viewportOffsetTop={35}
          bottomStyle={{position: 'fixed', top: 120}}
          affixStyle={{top: 120}}>
          <div className='tracking-side-bar' aria-label='Side Bar'>
            <NavLinks>
              <div className='tracking-sidenav-title'>{this.props.facilityName + ' Family RFA Documents'} </div>
              <div className='tracking-sidenav-label'>Applicants</div>
              <ApplicantSideBar
                applicants={peopleDocs.filter(element =>
                           element.person_type.indexOf(APPLICANT_PERSON_TYPE) === 0)} />
              <div className='tracking-sidenav-label'>Adults Residing in the Home</div>
              <ResidingAdultSideBar
                residingAdults={peopleDocs.filter(element =>
                           element.person_type.indexOf(RESIDING_PERSON_TYPE) === 0)} />
              <div className='tracking-sidenav-label'>Adults Regularly Present</div>
              <RegularAdultSideBar
                regularAdults={peopleDocs.filter(element =>
                           element.person_type.indexOf(REGULAR_PERSON_TYPE) === 0)} />

            </NavLinks>
          </div>
        </Affix>
      </div>
    )
  }
}

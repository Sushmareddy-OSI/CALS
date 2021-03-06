import React from 'react'
import ApiErrorMessages from 'components/common/errors/apiErrorMessages'
import {shallow, mount} from 'enzyme'

describe('Api Error Message', () => {
  let apiErrorComp
  it('verify error block with type business validation', () => {
    const props =
      [ {
        'incident_id': '8d2c379f-15c6-4012-917b-e0f9eb495305',
        'type': 'business_validation',
        'user_message': 'Applicant with first name - [test], last name - [fix] and name suffix - [] already exists in application',
        'code': 'BV000005',
        'technical_message': 'applicant-names-duplication-validation'
      } ]
    apiErrorComp = mount(<ApiErrorMessages errors={props} />)
    expect(apiErrorComp.find('span').length).toEqual(3)
  })
  it('verify error block with type constraint validation', () => {
    const props =
      [ {
        'incident_id': '8d2c379f-15c6-4012-917b-e0f9eb495305',
        'type': 'constraint_validation',
        'user_message': 'Applicant with first name - [test], last name - [fix] and name suffix - [] already exists in application',
        'property': 'BV000005',
        'invalid_value': 'invalid value'
      } ]
    apiErrorComp = mount(<ApiErrorMessages errors={props} />)
    expect(apiErrorComp.find('span').length).toEqual(4)
  })

  it('verify error block with type security exception', () => {
    const props =
    [ {
      'incident_id': '8d2c379f-15c6-4012-917b-e0f9eb495305',
      'type': 'security_exception',
      'user_message': 'Applicant with first name - [test], last name - [fix] and name suffix - [] already exists in application',
      'technical_message': 'Something went wrong'
    } ]
    apiErrorComp = mount(<ApiErrorMessages errors={props} />)
    expect(apiErrorComp.find('span').length).toEqual(3)
  })
})

import React from 'react'
import {MinorCardField} from 'rfa_forms/rfa01a_edit_view/minorCardField.js'
import {shallow, mount} from 'enzyme'
import {relationshipTypes, genderTypes, selectedYes} from './../../helpers/constants'
import Validator from 'helpers/validator'
describe('Verify MinorCardFields', function () {
  const applicants = [{
    first_name: 'gdfghfhgv',
    last_name: 'hgbhg',
    middle_name: ''
  }]
  const minorChildren = {
    index: 0,
    gender: {
      'id': 0,
      'value': ''
    },
    relationship_to_applicants: [
      {
        applicant_id: null,
        child_financially_supported: 'yes',
        child_adopted: 'yes',
        relationship_to_applicant_freeform: '',
        relationship_to_applicant: {
          'id': 0,
          'value': ''
        }
      }
    ],
    date_of_birth: '2017-01-01'
  }

  let minorChildCardComp, handleNameFieldInputSpy, handleRelationshipTypeToApplicantSpy, onFieldChangeSpy
  let relationType = relationshipTypes
  beforeEach(() => {
    handleRelationshipTypeToApplicantSpy = jasmine.createSpy('')
    onFieldChangeSpy = jasmine.createSpy('')
    let validator = new Validator({})
    minorChildCardComp = mount(<MinorCardField
      index={0}
      genderTypes={genderTypes.items}
      relationshipTypes={relationType}
      applicants={applicants}
      handleRelationshipTypeToApplicant={handleRelationshipTypeToApplicantSpy}
      onFieldChange={onFieldChangeSpy}
      minorChild={minorChildren}
      validator={validator} />)
  })
  it('verify Relationship field', () => {
    let relationShipField = minorChildCardComp.find('.col-md-12').find('#relationship_to_applicant0person0relationship_to_applicant_freeform').hostNodes()
    relationShipField.simulate('change', {target: {value: 'Child'}})
    expect(handleRelationshipTypeToApplicantSpy).toHaveBeenCalledWith({ first_name: 'gdfghfhgv', last_name: 'hgbhg', middle_name: '' }, 'Child', 0, 0)
  })

  it('verify Gender', () => {
    let relationShipField = minorChildCardComp.find('.col-md-12').last().find('#minor_gender').hostNodes()
    relationShipField.simulate('change', {target: {options: {'2': {value: '2', text: 'Female'}, selectedIndex: 2}}})
    expect(onFieldChangeSpy).toHaveBeenCalledWith(0, Object({ id: '2', value: 'Female' }), 'gender')
  })
  it('verify date of birth', () => {
    let dateOfBirthField = minorChildCardComp.find('.col-md-12').last().find('#date_of_birth').hostNodes()
    dateOfBirthField.simulate('change', {target: {value: '01/02/2000'}})
    expect(onFieldChangeSpy).toHaveBeenCalledWith(0, '2000-01-02', 'date_of_birth')
  })
  it('verify child_financially_supported field', () => {
    let relationShipField = minorChildCardComp.find('.col-md-12').first().find('#child_financially_supported').hostNodes()
    relationShipField.simulate('change', selectedYes)
    expect(onFieldChangeSpy).toHaveBeenCalledWith(0, '2', 'child_financially_supported')
  })
  it('verify child adopted field', () => {
    let relationShipField = minorChildCardComp.find('.col-md-12').first().find('#child_adopted').hostNodes()
    relationShipField.simulate('change', selectedYes)
    expect(onFieldChangeSpy).toHaveBeenCalledWith(0, '2', 'child_adopted')
  })
})

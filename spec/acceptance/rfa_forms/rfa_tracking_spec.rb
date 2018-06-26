# frozen_string_literal: true

require 'rails_helper'
require 'vcr'
require 'faker'

RSpec.feature 'RFATracking', js: true, inaccessible: true do
  scenario 'visit tracking page from dashboard', set_auth_header: true do
    visit root_path
    first('.tracking').click_link
    expect(page).to have_content '-RFA Application'
  end

  scenario 'visit tracking page from dashboard ande save', set_auth_header: true do
    visit root_path
    first('.tracking').click_link
    expect(page).to have_button 'Edit Checklist'
    click_button 'Edit Checklist'
    expect(page).to have_button 'Save'
    expect(page).to have_button 'Cancel'
  end

  scenario 'visit tracking page from dashboard and Edit', set_auth_header: true do
    visit root_path
    first('.tracking').click_link
    expect(page).to have_button 'Edit Checklist'
    click_button 'Edit Checklist'
    expect(page).to have_button 'Save'
    expect(page).to have_button 'Cancel'

    fill_in('familyEditRecievedDate0', with: '12/11/1987', match: :prefer_exact)
    fill_in('familyEditNotes0', with: 'testing', match: :prefer_exact)
    fill_in('taskAndTrainingEditCompletedDate0', with: '12/12/1987', match: :prefer_exact)
    fill_in('taskAndTrainingEditNotes0', with: 'testing', match: :prefer_exact)
    fill_in('assessmentEditSubmittedDate0', with: '12/13/1987', match: :prefer_exact)
    fill_in('assessmentEditApprovedDate0', with: '12/14/1987', match: :prefer_exact)
    fill_in('assessmentEditText0', with: 'testing', match: :prefer_exact)
    click_button 'Save'
    expect(page).to have_content '12/11/1987'
    expect(page).to have_content 'testing'
    expect(page).to have_content '12/12/1987'
    expect(page).to have_content 'testing'
    expect(page).to have_content '12/13/1987'
    expect(page).to have_content '12/14/1987'
    expect(page).to have_content 'testing'
  end

  scenario 'visit tracking page from dashboard and cancel', set_auth_header: true do
    visit root_path
    all('.tracking').last.click_link
    expect(page).to have_button 'Edit Checklist'
    click_button 'Edit Checklist'
    expect(page).to have_button 'Save'
    expect(page).to have_button 'Cancel'
    fill_in('familyEditRecievedDate0', with: '11/11/1987', match: :prefer_exact)
    fill_in('familyEditNotes0', with: 'testing', match: :prefer_exact)
    fill_in('taskAndTrainingEditCompletedDate0', with: '11/12/1987', match: :prefer_exact)
    fill_in('taskAndTrainingEditNotes0', with: 'testing', match: :prefer_exact)
    fill_in('assessmentEditSubmittedDate0', with: '11/13/1987', match: :prefer_exact)
    fill_in('assessmentEditApprovedDate0', with: '11/14/1987', match: :prefer_exact)
    fill_in('assessmentEditText0', with: 'testing', match: :prefer_exact)
    click_button 'Cancel'
    expect(page).not_to have_content '11/11/1987'
    expect(page).not_to have_content 'testing'
    expect(page).not_to have_content '11/12/1987'
    expect(page).not_to have_content 'testing'
    expect(page).not_to have_content '11/13/1987'
    expect(page).not_to have_content '11/14/1987'
    expect(page).not_to have_content 'testing'
  end

  scenario 'visit tracking page from dashboard and Edit Applicant Row', set_auth_header: true do
    visit root_path
    all('.tracking').last.click_link
    expect(page).to have_button 'Edit Checklist'
    click_button 'Edit Checklist'
    expect(page).to have_button 'Save'
    expect(page).to have_button 'Cancel'
    fill_in('individual0EditStartDate0', with: '12/11/1987', match: :prefer_exact)
    fill_in('individual0EditApprovedDate0', with: '12/11/1987', match: :prefer_exact)
    fill_in('individual0EditText0', with: 'testing', match: :prefer_exact)
    fill_in('training0EditExpirationDate0', with: '12/12/1987', match: :prefer_exact)
    fill_in('training0EditText0', with: 'testing', match: :prefer_exact)
    fill_in('clearance0EditStartDate0', with: '12/13/1987', match: :prefer_exact)
    fill_in('clearance0EditCompleteDate0', with: '12/14/1987', match: :prefer_exact)
    fill_in('clearance0EditText0', with: 'testing', match: :prefer_exact)
    click_button 'Save'
    expect(page).to have_content '12/11/1987'
    expect(page).to have_content '12/11/1987'
    expect(page).to have_content 'testing'
    expect(page).to have_content '12/12/1987'
    expect(page).to have_content 'testing'
    expect(page).to have_content '12/13/1987'
    expect(page).to have_content '12/14/1987'
    expect(page).to have_content 'testing'
  end
  scenario 'visit tracking page from dashboard and Edit Other Adults Row', set_auth_header: true do
    visit root_path
    first('.tracking').click_link
    expect(page).to have_button 'Edit Checklist'
    click_button 'Edit Checklist'
    expect(page).to have_button 'Save'
    expect(page).to have_button 'Cancel'
    fill_in('individual1EditStartDate0', with: '12/11/1997', match: :prefer_exact)
    fill_in('individual1EditApprovedDate0', with: '12/11/1997', match: :prefer_exact)
    fill_in('individual1EditText0', with: 'Other Adutls Residing testing', match: :prefer_exact)
    fill_in('clearance1EditStartDate0', with: '12/13/1997', match: :prefer_exact)
    fill_in('clearance1EditCompleteDate0', with: '12/14/1997', match: :prefer_exact)
    fill_in('clearance1EditText0', with: 'Other Adutls Residing testing', match: :prefer_exact)
    click_button 'Save'
    expect(page).to have_content '12/11/1997'
    expect(page).to have_content '12/11/1997'
    expect(page).to have_content 'Other Adutls Residing testing'
    expect(page).to have_content '12/13/1997'
    expect(page).to have_content '12/14/1997'
    expect(page).to have_content 'Other Adutls Residing testing'
  end
end

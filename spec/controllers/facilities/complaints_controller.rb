require 'rspec'
require 'rails_helper'

describe Facilities::ComplaintsController do
  before do
    allow_any_instance_of(CalsBaseController).to receive(:authenticate_with_cwds).and_return(true)
    allow_any_instance_of(CalsBaseController).to receive(:get_session_token).and_return(ENV['TOKEN'])
  end

  describe 'GET index' do
    it 'returns JSON of compalints' do
      get :index, params: {facility_id: '100000299'}

      expect(response.status).to eq(200)
      expect(response.body.include?('complaints'))
    end
  end
end

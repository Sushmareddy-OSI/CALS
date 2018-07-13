# frozen_string_literal: true

module Concerns::Rfa::A02ApiProtocolProvider
  extend ActiveSupport::Concern
  include Concerns::RfaBaseApiProtocolProvider

  class_methods do
    def create_a02(auth_header, tracking_id)
      response = FaradayCals.post("/#{parent_path}/#{tracking_id}/#{api_resource_path}", auth_header, '{}')
      JSON.parse(response.body)
    end

    def update(auth_header, application_id, id, body)
      response = FaradayCals.put("/#{parent_path}/#{application_id}/#{api_resource_path}/#{id}", auth_header, body)
      new(JSON.parse(response.body))
    end

    def find_by_id(auth_header, id, application_id)
      response = FaradayCals.get("/#{parent_path}/#{application_id}/#{api_resource_path}/#{id}", auth_header)
      new(JSON.parse(response.body))
    end

    def all (auth_header, application_id)
      response = FaradayCals.get("/#{parent_path}/#{application_id}/#{api_resource_path}/", auth_header)
      new(JSON.parse(response.body))
    end
  end
end

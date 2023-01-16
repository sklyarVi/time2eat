module Api
  module V1
    class BaseController < ActionController::API
      helper ApplicationHelper

      respond_to :json

    end
  end
end

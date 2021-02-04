class ApplicationController < ActionController::Base
  require "uri"
  require "net/http"
  require "json"
  include ApplicationHelper

  def authorize_user
    @current_user = session["user_id"]
  end

  def current_user
    return @current_user
  end

  # helper_method :current_user
end

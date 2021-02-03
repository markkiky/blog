class ApplicationController < ActionController::Base
  require "uri"
  require "net/http"
  require "json"
  include ApplicationHelper

  helper_method :current_user

  private
  # @current_user = current_user
  def current_user
    # @current_user ||= User.find(session[:user_id]) if session[:user_id]
    @current_user = session['user_id']
 end
 
end

class ApplicationController < ActionController::Base
  require "uri"
  require "net/http"
  require "json"

  def current_user
    if session["user_id"]
      @current_user = session["user_id"]
    else
      redirect_to login_path
    end
  end
end

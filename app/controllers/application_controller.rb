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

  def current_path(path_info)
    path = Rails.application.routes.recognize_path path_info

    puts "current path: #{path}"
    return path
  end

  def current_controller(path_info)
    path = Rails.application.routes.recognize_path path_info
    controller = path[:controller]

    puts "current controller: #{controller}"
    return controller
  end

  def current_action(path_info)
    path = Rails.application.routes.recognize_path path_info
    action = path[:action]

    puts "current action: #{action}"
    # puts action
    return action
  end
end

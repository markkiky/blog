class ReportsController < ApplicationController
  before_action :current_user
  # before_action only: [:current_path, :current_controller, :current_action]
  # console

  def bills_reports
  end

  def checkin_reports
  end

  def checkout_reports
  end

  def transfers_reports
  end

  def complaints_reports
    begin
      # get all tickets
      path = current_path(request.env["PATH_INFO"])
      controller = current_path(request.env["PATH_INFO"])
      method = current_action(request.env["PATH_INFO"])

      url = URI("https://bookinn.ngrok.io/tickets")

      http = Net::HTTP.new(url.host, url.port)
      http.use_ssl = true
      request = Net::HTTP::Get.new(url)
      request["Authorization"] = "Bearer #{session["access_token"]}"

      response = http.request(request)
      puts response.read_body

      @response_tickets = JSON.parse(response.read_body)

      # get all rooms
      url = URI("https://bookinn.ngrok.io/room/status")

      http = Net::HTTP.new(url.host, url.port)
      http.use_ssl = true
      request = Net::HTTP::Post.new(url)
      request["Authorization"] = "Bearer #{session["access_token"]}"
      form_data = [["status", "2"]]
      request.set_form form_data, "multipart/form-data"
      # byebug
      response = http.request(request)
      puts response.read_body
      @response_rooms = JSON.parse(response.read_body)
    rescue => exception
      @rooms = {}
      @tickets = []
    else
      if @response_tickets["status"] == 200 && @response_rooms["status"] == 200
        @rooms = @response_rooms["data"]
        @tickets = @response_tickets["data"]
      else
        @rooms = {}
      end
    end
  end

  def accomodation_reports
  end

  def resources_reports
  end
end

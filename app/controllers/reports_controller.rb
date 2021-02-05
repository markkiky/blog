class ReportsController < ApplicationController
  before_action :current_user

  def bills_reports
  end

  def checkin_reports
    console
    begin
      url = URI("https://bookinn.ngrok.io/check_in")

      http = Net::HTTP.new(url.host, url.port)
      http.use_ssl = true
      request = Net::HTTP::Get.new(url)
      request["Authorization"] = "Bearer #{session["access_token"]}"

      response = http.request(request)
      puts response.read_body

      @response_json = JSON.parse(response.read_body)
    rescue => exception
      @checkin_reports = []
    else
      if @response_json["status"] == 200
         @checkin_reports =  @response_json["data"]
      else
      end
    end
  end

  def checkout_reports
  end

  def transfers_reports
  end

  def complaints_reports
    begin
      url = URI("https://bookinn.ngrok.io/tickets")

      http = Net::HTTP.new(url.host, url.port)
      http.use_ssl = true
      request = Net::HTTP::Get.new(url)
      request["Authorization"] = "Bearer #{session["access_token"]}"

      response = http.request(request)
      puts response.read_body

      @response_json = JSON.parse(response.read_body)
    rescue => exception
    else
      if @response_json["status"] == 200
      else
      end
    end
  end

  def accomodation_reports
  end

  def resources_reports
  end
end

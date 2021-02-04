class DashboardsController < ApplicationController
  before_action :current_user
  # before_action :current_user!
  # console
  def index
    # byebug
    begin
      url = URI("https://bookinn.ngrok.io/dashboard")

      http = Net::HTTP.new(url.host, url.port)
      http.use_ssl = true
      request = Net::HTTP::Get.new(url)

      response = http.request(request)
      puts response.read_body

      @response_json = JSON.parse(response.read_body)
    rescue => exception
      @data = {}
    else
      if @response_json["status"] == 200
        @data = @response_json["data"]
      else
        @data = @response_json["data"]
      end
    end
  end
end

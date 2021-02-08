class RoomsController < ApplicationController
  before_action :set_room, only: %i[ show edit update destroy ]
  skip_before_action :verify_authenticity_token
  before_action :current_user

  # GET /rooms or /rooms.json
  def index
    @current_user = current_user
    begin
      # get all rooms
      url = URI("https://bookinn.ngrok.io/rooms")

      http = Net::HTTP.new(url.host, url.port)
      http.use_ssl = true

      request = Net::HTTP::Get.new(url)
      request["Authorization"] = "Bearer #{session["access_token"]}"

      response = http.request(request)
      puts response.read_body
      @response_rooms = JSON.parse(response.read_body)
    rescue => exception
      @rooms = {}
    else
      if @response_rooms["status"] == 200
        @rooms = @response_rooms["data"]
      elsif @response_rooms["status"] == 401
      elsif @response_rooms["status"] == 401
      end
    end
  end

  # GET /rooms/1 or /rooms/1.json
  def show
  end

  # GET /rooms/new
  def new
    # console
    begin
      # get all rooms
      url = URI("http://bookinn.ngrok.io/rooms")

      http = Net::HTTP.new(url.host, url.port)
      request = Net::HTTP::Get.new(url)
      request["Authorization"] = "Bearer #{session["access_token"]}"

      response = http.request(request)
      puts response.read_body
      @response_rooms = JSON.parse(response.read_body)

      # get all room_types
      url = URI("http://bookinn.ngrok.io/room_types")

      http = Net::HTTP.new(url.host, url.port)
      request = Net::HTTP::Get.new(url)
      request["Authorization"] = "Bearer #{session["access_token"]}"

      response = http.request(request)
      puts response.read_body
      @response_room_types = JSON.parse(response.read_body)

      # get all hotels
      url = URI("http://bookinn.ngrok.io/hotels")

      http = Net::HTTP.new(url.host, url.port)
      request = Net::HTTP::Get.new(url)
      request["Authorization"] = "Bearer #{session["access_token"]}"

      response = http.request(request)
      puts response.read_body
      @response_hotels = JSON.parse(response.read_body)

      # get all hotel_wings
      url = URI("http://bookinn.ngrok.io/hotel_wings")

      http = Net::HTTP.new(url.host, url.port)
      request = Net::HTTP::Get.new(url)
      request["Authorization"] = "Bearer #{session["access_token"]}"

      response = http.request(request)
      puts response.read_body
      @response_hotel_wings = JSON.parse(response.read_body)
      # byebug
    rescue => exception
      @room_types = []
      @hotels = []
      @hotel_wings = []
      @rooms = []
      # byebug
    else
      if @response_room_types["status"] == 200 && @response_hotel_wings["status"] == 200 && @response_hotels["status"] == 200 && @response_rooms["status"] == 200
        @room_types = @response_room_types["data"]
        @hotels = @response_hotels["data"]
        @hotel_wings = @response_hotel_wings["data"]
        @rooms = @response_rooms["data"]
        # byebug
        # byebug
      elsif @response_room_types["status"] == 401
        # @room_types = []
        redirect_to login_path
      else
        @room_types = []
      end
    end
  end

  # GET /rooms/1/edit
  def edit
  end

  def check_in
    # console
    begin
      # get countries
      url = URI("https://bookinn.ngrok.io/countries")

      http = Net::HTTP.new(url.host, url.port)
      http.use_ssl = true
      request = Net::HTTP::Get.new(url)
      request["authorization"] = "Bearer #{session["access_token"]}"

      response = http.request(request)
      puts response.read_body

      @response_countries = JSON.parse(response.read_body)

      # get genders
      url = URI("https://bookinn.ngrok.io/gender")

      http = Net::HTTP.new(url.host, url.port)
      http.use_ssl = true
      request = Net::HTTP::Get.new(url)
      request["authorization"] = "Bearer #{session["access_token"]}"

      response = http.request(request)
      puts response.read_body

      @response_genders = JSON.parse(response.read_body)

      # get room amenities
      url = URI("https://bookinn.ngrok.io/room_amenities")

      http = Net::HTTP.new(url.host, url.port)
      http.use_ssl = true
      request = Net::HTTP::Get.new(url)
      request["authorization"] = "Bearer #{session["access_token"]}"

      response = http.request(request)
      puts response.read_body

      @response_room_amenities = JSON.parse(response.read_body)

      # get hotel amenities
      url = URI("https://bookinn.ngrok.io/hotel_amenities")

      http = Net::HTTP.new(url.host, url.port)
      http.use_ssl = true
      request = Net::HTTP::Get.new(url)
      request["authorization"] = "Bearer #{session["access_token"]}"

      response = http.request(request)
      puts response.read_body

      @response_hotel_amenities = JSON.parse(response.read_body)

      # get room types
      url = URI("https://bookinn.ngrok.io/room_types")

      http = Net::HTTP.new(url.host, url.port)
      http.use_ssl = true
      request = Net::HTTP::Get.new(url)
      request["authorization"] = "Bearer #{session["access_token"]}"

      response = http.request(request)
      puts response.read_body

      @response_room_types = JSON.parse(response.read_body)

      # get rooms
      url = URI("https://bookinn.ngrok.io/rooms")

      http = Net::HTTP.new(url.host, url.port)
      http.use_ssl = true
      request = Net::HTTP::Get.new(url)
      request["authorization"] = "Bearer #{session["access_token"]}"

      response = http.request(request)
      puts response.read_body

      @response_rooms = JSON.parse(response.read_body)
    rescue => exception
      @countries = []
      @genders = []
      @room_amenities = []
      @hotel_amenities = []
      @room_types = []
      @rooms = []
    else
      if @response_countries["status"] == 200 && @response_genders["status"] == 200 && @response_room_amenities["status"] == 200 && @response_hotel_amenities["status"] == 200 && @response_room_types["status"] == 200 && @response_rooms["status"] == 200
        @countries = @response_countries["data"]
        @genders = @response_genders["data"]
        @room_amenities = @response_room_amenities["data"]
        @hotel_amenities = @response_hotel_amenities["data"]
        @room_types = @response_room_types["data"]
        @rooms = @response_rooms["data"]
        # byebug
      else
      end
    end
  end

  def server_check_in
    begin
      puts params
      url = URI("https://bookinn.ngrok.io/single_direct_check_in")

      http = Net::HTTP.new(url.host, url.port)
      http.use_ssl = true
      request = Net::HTTP::Post.new(url)
      request["Content-Type"] = "application/json"
      request["Authorization"] = "Bearer #{session["access_token"]}"
      request.body = params.to_json
      response = http.request(request)
      puts response.read_body

      @response_json = JSON.parse(response.read_body)
    rescue Net::ReadTimeout
      puts "endpoint timed out"
    rescue ActiveRecord::RecordNotFound
    else
      if @response_json["status"] == 200
        # create session
        session["user_id"] = @response_json["data"]["id"]
        session["access_token"] = @response_json["access_token"]
        session["username"] = @response_json["data"]["username"]
        session["role_id"] = @response_json["data"]["role_id"]
        session["hotel_id"] = @response_json["data"]["hotel_id"]
        session["email"] = @response_json["data"]["email"]
        redirect_to dashboard_path
      else
        # login failed
        redirect_to login_path
      end
    end
  end

  def check_out
  end

  def bulk_check_in
  end

  # available rooms
  def available_rooms
    begin
      url = URI("https://bookinn.ngrok.io/room/status")

      http = Net::HTTP.new(url.host, url.port)
      http.use_ssl = true
      request = Net::HTTP::Post.new(url)
      request["Authorization"] = "Bearer #{session["access_token"]}"
      form_data = [["status", "1"]]
      request.set_form form_data, "multipart/form-data"
      # byebug
      response = http.request(request)
      puts response.read_body
      @response_json = JSON.parse(response.read_body)
      # byebug

    rescue => exception
      # byebug
      puts exception
      @rooms = Array.new
    else
      # byebug
      if @response_json["status"] == 200
        # success
        @rooms = @response_json["data"]
      elsif @response_json["status"] == 404
        # error
        # show error page
        @rooms = []
      elsif @response_json["status"] == 401
        redirect_to login_path
      else
        @rooms = []
      end
    end
  end

  # occupied rooms
  def occupied_rooms
    begin
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
      @response_json = JSON.parse(response.read_body)
      # byebug

    rescue => exception
      # byebug
      @rooms = Array.new
    else
      # byebug
      if @response_json["status"] == 200
        # success
        @rooms = @response_json["data"]
      elsif @response_json["status"] == 404
        # error
        # show error page
        @rooms = []
      elsif @response_json["status"] == 401
        redirect_to login_path
      else
        @rooms = []
      end
    end
  end

  # POST /rooms or /rooms.json
  def create
    begin
      url = URI("https://bookinn.ngrok.io/rooms")

      http = Net::HTTP.new(url.host, url.port)
      http.use_ssl = true
      request = Net::HTTP::Post.new(url)
      request["Authorization"] = "Bearer #{session["access_token"]}"
      request["Content-Type"] = "application/json"
      request.body = room_params.to_json
      response = http.request(request)
      puts response.read_body

      @response_json = JSON.parse(response.read_body)
    rescue => exception
      redirect_to new_room_path
    else
      if @response_json["status"] == 200
        redirect_to new_room_path
      elsif @response_json["status"] == 401
        redirect_to login_path
      else
        redirect_to new_room_path
      end
    end
  end

  # PATCH/PUT /rooms/1 or /rooms/1.json
  def update
    respond_to do |format|
      if @room.update(room_params)
        format.html { redirect_to @room, notice: "Room was successfully updated." }
        format.json { render :show, status: :ok, location: @room }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @room.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /rooms/1 or /rooms/1.json
  def destroy
    @room.destroy
    respond_to do |format|
      format.html { redirect_to rooms_url, notice: "Room was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_room
    @room = Room.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def room_params
    params.permit(:hotel_id, :hotel_wing_id, :room_id, :room_no, :room_name, :room_type_id, :room_price, :capacity, :status, :is_active, :created_by, :updated_by)
  end
end

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
      request.body = "{   \"status\": \"1\"\n}"
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

  # occupied rooms
  def occupied_rooms
    begin
      url = URI("https://bookinn.ngrok.io/rooms")

      http = Net::HTTP.new(url.host, url.port)
      http.use_ssl = true
      request = Net::HTTP::Get.new(url)
      # request.body = "{\n    \"room_no\": \"A89\",\n    \"room_price\": \"2000\",\n    \n    \"room_type_id\": \"1\",\n    \"status\": \"1\"\n}"

      response = http.request(request)
      puts response.read_body
      @response_json = JSON.parse(response.read_body)
      # byebug
      @rooms = []
    rescue => exception
    else
      if @response_json["status"] == 200
        # success
        @rooms = @response_json["data"]
      else
        # error
        # show error page
        @rooms = @response_json["data"]
      end
    end
  end

  # POST /rooms or /rooms.json
  def create
    # byebug
    begin
      # byebug
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
      redirect_to rooms_path
    else
      if @response_json["status"] == 200
        redirect_to rooms_path
      elsif @response_json["status"] == 401
        redirect_to login_path
      else
        redirect_to rooms_path
      end
    end

    # @room = Room.new(room_params)

    # respond_to do |format|
    #   if @room.save
    #     format.html { redirect_to @room, notice: "Room was successfully created." }
    #     format.json { render :show, status: :created, location: @room }
    #   else
    #     format.html { render :new, status: :unprocessable_entity }
    #     format.json { render json: @room.errors, status: :unprocessable_entity }
    #   end
    # end
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

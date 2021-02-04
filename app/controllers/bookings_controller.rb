class BookingsController < ApplicationController
  before_action :set_booking, only: %i[ show edit update destroy ]
  skip_before_action :verify_authenticity_token
  before_action :current_user

  # GET /bookings or /bookings.json
  def index
    @bookings = Booking.all
  end

  # GET /bookings/1 or /bookings/1.json
  def show
  end

  # GET /bookings/new
  def new
    @booking = Booking.new
  end

  # GET /bookings/1/edit
  def edit
  end

  def room_booking
    begin
      url = URI("https://bookinn.ngrok.io/room_types")

      http = Net::HTTP.new(url.host, url.port)
      http.use_ssl = true
      request = Net::HTTP::Get.new(url)
      request["Authorization"] = "Bearer #{session["access_token"]}"
      # request.body = "{\n    \"room_type_description\": \"Beach House\",\n    \"room_type_total\": \"6\",\n    \"room_price\": \"\"\n}"

      response = http.request(request)
      puts response.read_body
      @response_json = JSON.parse(response.read_body)
    rescue => exception
    else
      if @response_json["status"] == 200
        @room_types = @response_json["data"]
      elsif @response_json["status"] == 401
        redirect_to login_path
      end
    end
  end

  def server_booking
    puts params
  end

  def bookings
  end

  # POST /bookings or /bookings.json
  def create
    @booking = Booking.new(booking_params)

    respond_to do |format|
      if @booking.save
        format.html { redirect_to @booking, notice: "Booking was successfully created." }
        format.json { render :show, status: :created, location: @booking }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @booking.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /bookings/1 or /bookings/1.json
  def update
    respond_to do |format|
      if @booking.update(booking_params)
        format.html { redirect_to @booking, notice: "Booking was successfully updated." }
        format.json { render :show, status: :ok, location: @booking }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @booking.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /bookings/1 or /bookings/1.json
  def destroy
    @booking.destroy
    respond_to do |format|
      format.html { redirect_to bookings_url, notice: "Booking was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_booking
    @booking = Booking.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def booking_params
    params.fetch(:booking, {})
  end
end

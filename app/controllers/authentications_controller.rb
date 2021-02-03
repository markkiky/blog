class AuthenticationsController < ApplicationController
  before_action :set_authentication, only: %i[ show edit update destroy ]
  skip_before_action :verify_authenticity_token

  # GET /authentications or /authentications.json
  def index
    @authentications = Authentication.all
  end

  # GET /authentications/1 or /authentications/1.json
  def show
  end

  # GET /authentications/new
  def new
    @authentication = Authentication.new
  end

  # GET /authentications/1/edit
  def edit
  end

  # POST /authentications or /authentications.json
  def create
    @authentication = Authentication.new(authentication_params)

    respond_to do |format|
      if @authentication.save
        format.html { redirect_to @authentication, notice: "Authentication was successfully created." }
        format.json { render :show, status: :created, location: @authentication }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @authentication.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /authentications/1 or /authentications/1.json
  def update
    respond_to do |format|
      if @authentication.update(authentication_params)
        format.html { redirect_to @authentication, notice: "Authentication was successfully updated." }
        format.json { render :show, status: :ok, location: @authentication }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @authentication.errors, status: :unprocessable_entity }
      end
    end
  end

  def login
    # byebug

  end

  def server_login
    begin
      puts server_login_params
      # byebug
      # byebug
      url = URI("https://bookinn.ngrok.io/auth/login")

      http = Net::HTTP.new(url.host, url.port)
      http.use_ssl = true
      request = Net::HTTP::Post.new(url)
      request["Content-Type"] = "application/json"
      request.body = server_login_params.to_json
      response = http.request(request)
      puts response.read_body

      @response_json = JSON.parse(response.read_body)
    rescue ActiveRecord::RecordNotFound
    else
      if @response_json["status"] == 200
        # create session
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

  def profile
  end

  # DELETE /authentications/1 or /authentications/1.json
  def destroy
    @authentication.destroy
    respond_to do |format|
      format.html { redirect_to authentications_url, notice: "Authentication was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_authentication
    @authentication = Authentication.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def authentication_params
    params.fetch(:authentication, {})
  end

  def server_login_params
    params.permit(:email, :password)
  end
end

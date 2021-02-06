Rails.application.routes.draw do
  require "sidekiq/web"
  require "sidekiq-status/web"
  require "sidekiq/cron/web"
  # require "sidekiq/batch/web"

  mount Sidekiq::Web, at: "/sidekiq"
  # Serve websocket cable requests in-process
  mount ActionCable.server => "/cable"

  resources :authentications
  resources :bookings
  resources :rooms

  get "login", to: "authentications#login", as: :login
  post "auth/login", to: "authentications#server_login"
  get "logout", to: "authentications#logout", as: :logout

  get "available_rooms", to: "rooms#available_rooms", as: :available_rooms
  get "occupied_rooms", to: "rooms#occupied_rooms", as: :occupied_rooms
  get "checkin", to: "rooms#check_in", as: :check_in
  post "server_checkin", to: "rooms#server_check_in"
  get "checkout", to: "rooms#check_out", as: :check_out
  get "bulk_checkin", to: "rooms#bulk_check_in", as: :bulk_check_in

  get "room_booking", to: "bookings#room_booking", as: :room_booking
  post "room_booking", to: "bookings#server_booking", as: :server_booking

  get "profile", to: "authentications#profile", as: :profile

  # reports routes
  get "bills_reports", to: "reports#bills_reports", as: :bills_reports
  get "checkin_reports", to: "reports#checkin_reports", as: :checkin_reports
  get "checkout_reports", to: "reports#checkout_reports", as: :checkout_reports
  get "transfers_reports", to: "reports#transfers_reports", as: :transfers_reports
  get "complaints_reports", to: "reports#complaints_reports", as: :complaints_reports
  get "accomodation_reports", to: "reports#accomodation_reports", as: :accomodation_reports
  get "resources_reports", to: "reports#resources_reports", as: :resources_reports

  # get "booking", to: "bookings#bookings"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  root "dashboards#index"
  get "/", to: "dashboards#index", as: :dashboard
end

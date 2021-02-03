Rails.application.routes.draw do
  require "sidekiq/web"
  require "sidekiq-status/web"
  require "sidekiq/cron/web"
  # require "sidekiq/batch/web"

  mount Sidekiq::Web, at: "/sidekiq"

  resources :authentications
  resources :bookings
  resources :rooms

  get "login", to: "authentications#login", as: :login
  post "auth/login", to: "authentications#server_login"
  get "available_rooms", to: "rooms#available_rooms", as: :available_rooms
  get "checkin", to: "rooms#check_in", as: :check_in
  get "checkout", to: "rooms#check_out", as: :check_out
  get "bulk_checkin", to: "rooms#bulk_check_in", as: :bulk_check_in

  get "room_booking", to: "bookings#room_booking", as: :room_booking
  post "room_booking", to: "bookings#server_booking", as: :server_booking

  get "profile", to: "authentications#profile", as: :profile

  # get "booking", to: "bookings#bookings"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  root "dashboards#index"
  get "/", to: "dashboards#index", as: :dashboard
end

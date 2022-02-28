Rails.application.routes.draw do
  
  resources :to_dos
  resource :users
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  #custom routes
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  #post "/to_dos", to: "to_dos#create"
  get "/me", to: "users#show"
  post "/search", to: "to_dos#search"
  
end

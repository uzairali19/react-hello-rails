Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  namespace :api do
    namespace :v1 do
      resources :greetings, only: [:index]
    end
  end

  get "*page", to: "home#index", constraints: ->(req) do
                 !req.xhr? && req.format.html?
               end

  # resources :greetings get "/greetings", to: "greetings#index"
  get "/greetings", action: :index, controller: "greetings"

  root to: "home#index"
end

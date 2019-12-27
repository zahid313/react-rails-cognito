Rails.application.routes.draw do
  root 'pages#index'
  get 'callback', to: 'pages#index'
  get 'users', to: 'pages#users'
  # root to: 'site#index'
  # match '*path', to: 'pages#index', via: :get
  get 'episodes', to: 'pages#episodes'
  namespace :api do
    namespace :v1 do
      resources :items, only: [:index, :create, :destroy, :update]
    end
  end
end

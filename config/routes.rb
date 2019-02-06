Rails.application.routes.draw do
  namespace :api do
    get 'pokemon/index'
  end

  namespace :api do
    get 'pokemon/show'
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resources :pokemon, only: [:create, :index, :show]
  end
  root to: 'static_pages#root'
end

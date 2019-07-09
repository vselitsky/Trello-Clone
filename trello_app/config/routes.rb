Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'
  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :boards


    resources :lists, only: [:create, :edit, :destroy, :show, :index] do
      resources :cards, only: [:index, :show]
    end
    
    resources :cards, only: [:create, :edit, :destroy]
    
    end
end

Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'
  namespace :api, defaults: {format: :json} do 
    patch '/update_pos/:id', to: "lists#update_pos"
    
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :boards 

    resources :lists, only: [:create, :edit, :destroy, :show, :update, :index] 
    
    resources :cards, only: [:create, :edit, :destroy, :index, :show, :update]
    
    end
end

Rails.application.routes.draw do
  root "bears#app"
  
  resources :bears
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

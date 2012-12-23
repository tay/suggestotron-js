SuggestotronBackbone::Application.routes.draw do
  resources :votes

  resources :topics

  root :to => 'root#index'
end

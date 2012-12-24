SuggestotronBackbone::Application.routes.draw do
  resources :topics do
    resources :votes, :only => :create
  end

  root :to => 'root#index'
end

require 'spec_helper'

describe TopicsController do
  describe '#index' do
    it 'renders each comment as json' do
      get :index, format: :json
      response.should be_success
    end
  end
end
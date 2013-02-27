require 'spec_helper'

describe TopicsController do
  describe '#index' do
    it 'renders each comment as json' do
      get :index, format: :json
      response.should be_success
    end
  end

  describe '#create' do
    it 'has the right success code' do
      post :create, topic: { title: 'A Topic' }
      response.status.should == 201
    end

    it 'creates a new item' do
      expect {
        post :create, topic: { title: 'A Topic' }
      }.to change(Topic, :count).by(1)
    end
  end
end
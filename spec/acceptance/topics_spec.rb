require 'spec_helper'

resource 'Topic' do
  get '/topics' do
    example_request 'Get a list of all topics' do
      status.should == 200
    end
  end

  get '/topics/:id' do
    let(:topic) { Topic.first }
    let(:id) { topic.id }

    example_request 'Get a topic' do
      status.should == 200
    end
  end

  post '/topics' do
    let(:title) { 'A New Topic 1' }
    let(:description) { 'Description for A New Topic :)' }

    parameter :title, 'Topic title'
    parameter :description, 'Topic description'
    required_parameters :title

    example_request 'Create a new topic' do
      status.should == 201
    end
  end

  delete '/topics/:id' do

    let(:id) { Topic.first.id }

    example_request 'Delete a topic' do
      status.should == 204
    end
  end
end
require 'spec_helper'

describe Topic do
  describe '#as_json' do
    let(:topic) { Topic.first }
    let(:hash) { topic.as_json }

    it 'includes the number of comments' do
      hash[:vote_count].should == topic.votes.count
    end
  end
end
class VotesController < ApplicationController
  def create
    topic = Topic.find(params[:topic_id])
    vote = topic.votes.build
    vote.save!
    respond_to do |format|
      format.html { redirect_to(topics_path) }
      format.json { render json: {}, status: :created }
    end
  end
end

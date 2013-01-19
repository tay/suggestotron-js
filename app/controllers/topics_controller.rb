class TopicsController < ApplicationController
  def index
    @topics = Topic.all
    render json: @topics
  end

  def show
    @topic = Topic.find(params[:id])
    render json: @topic
  end

  def create
    @topic = Topic.new(params[:topic])

    if @topic.save
      render json: @topic, status: :created
    else
      render json: @topic.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @topic = Topic.find(params[:id])
    @topic.destroy
    head :no_content
  end
end

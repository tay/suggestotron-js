class Topic < ActiveRecord::Base
  validates :title, :presence => true
  validates :description, :presence => false

  attr_accessible :description, :title

  has_many :votes
end
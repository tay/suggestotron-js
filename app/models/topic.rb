class Topic < ActiveRecord::Base
  validates :title, :presence => true, :uniqueness => true

  attr_accessible :description, :title

  has_many :votes

  def as_json(options = nil)
    {
      id: id,
      title: title,
      description: description,
      vote_count: votes.count
    }
  end
end
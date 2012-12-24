class Topic < ActiveRecord::Base
  validates :title, :presence => true, :uniqueness => true
  validates :description, :presence => false

  attr_accessible :description, :title

  has_many :votes

  def as_json(options = nil)
    {
      id: id,
      title: title,
      description: description,
      votes: votes
    }
  end
end
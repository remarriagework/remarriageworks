class Content < ActiveRecord::Base



  attr_accessible :body, :subtitle, :title, :content_type
  attr_taggable :tags

  validates :title, presence: true, length: { maximum: 140 }
  validates :subtitle, length: { maximum: 140 }
  validates :content_type, presence: true


end
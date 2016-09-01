class Location < ActiveRecord::Base
  belongs_to :user
  has_many :readings, dependent: :destroy
  validates_presence_of :name
  validates :name, uniqueness: true

end

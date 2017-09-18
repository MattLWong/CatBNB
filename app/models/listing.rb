class Listing < ApplicationRecord
  validates :title, :description, :host_id, :lat, :lng, :street_address, :city, :zip, :country, :price, :cover_img_url, presence: true

  belongs_to :host,
  primary_key: :id,
  foreign_key: :host_id,
  class_name: :User

  has_many :bookings,
  primary_key: :id,
  foreign_key: :listing_id,
  class_name: :Booking

  has_many :reviews,
  primary_key: :id,
  foreign_key: :listing_id,
  class_name: :Review

  def average_rating
    average = reviews.average(:rating).to_f

    if average.to_s.length > 1
      tenths = average.to_s.slice(2)
      if tenths < 3
        return average.to_s.slice(0,1).to_f
      elsif tenths > 7
        return average.to_s.slice(0,1).to_f + 1
      else
        return average.to_s.slice(0,1).to_f + 0.5
      end
    end

    return average
  end

  def self.in_bounds(bounds)
    self.where("lat < ?", bounds[:northEast][:lat])
        .where("lat > ?", bounds[:southWest][:lat])
        .where("lng > ?", bounds[:southWest][:lng])
        .where("lng < ?", bounds[:northEast][:lng])
  end
end

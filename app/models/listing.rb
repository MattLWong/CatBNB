class Listing < ApplicationRecord

  geocoded_by :return_full_street_address
  before_validation :geocode

  validates :title, :description, :host_id, :street_address, :latitude, :longitude, :city, :zip, :country, :price, :cover_img_url, presence: true

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
      tenths = average.to_s.slice(2).to_i
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

  def return_full_street_address
    return self.street_address + " " + self.city + " " + self.zip.to_s
  end

  def self.in_bounds(bounds)
    self.where("latitude < ?", bounds[:northEast][:lat])
        .where("latitude > ?", bounds[:southWest][:lat])
        .where("longitude > ?", bounds[:southWest][:lng])
        .where("longitude < ?", bounds[:northEast][:lng])
  end
end

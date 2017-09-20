class City < ApplicationRecord
  geocoded_by :return_street_address
  after_initialize :geocode

  validates :latitude, :longitude, presence: true

  def return_street_address
    return self.city_name + " " + self.state
  end

  def self.searchByString(string)
    City.where("city_name like?", "#{string.capitalize}%").order('city_name ASC').limit(5)
  end
end

class Location < ApplicationRecord
  geocoded_by :address
  after_initialize :geocode
end

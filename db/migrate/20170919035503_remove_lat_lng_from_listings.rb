class RemoveLatLngFromListings < ActiveRecord::Migration[5.1]
  def change
    remove_column :listings, :lat, :lng
  end
end

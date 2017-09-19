class RemoveLngFromListings < ActiveRecord::Migration[5.1]
  def change
    remove_column :listings, :lng
  end
end

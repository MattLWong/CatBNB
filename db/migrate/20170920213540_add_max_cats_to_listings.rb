class AddMaxCatsToListings < ActiveRecord::Migration[5.1]
  def change
    add_column :listings, :maxCats, :integer
  end
end

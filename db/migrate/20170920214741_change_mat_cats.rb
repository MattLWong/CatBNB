class ChangeMatCats < ActiveRecord::Migration[5.1]
  def change
    remove_column :listings, :maxCats
    add_column :listings, :max_cats, :integer
  end
end

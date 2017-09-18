class CreateListings < ActiveRecord::Migration[5.1]
  def change
    create_table :listings do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.integer :host_id, null: false
      t.float :lat, null: false
      t.float :lng, null: false
      t.string :street_address, null: false
      t.string :city, null: false
      t.integer :zip, null: false
      t.string :country, null: false
      t.string :apt
      t.float :price, null: false
      t.string :cover_img_url, null: false

      t.boolean :deluxe_bed
      t.boolean :house_dog_friend
      t.boolean :gourmet_meals
      t.boolean :free_grooming
      t.boolean :maze_playground
      t.boolean :air_conditioning
      t.boolean :laser_tag
      t.boolean :natural_light
      t.boolean :cuddling_partner

      t.boolean :spay_neuter
      t.boolean :vaccinated
      t.boolean :flea
      t.boolean :peeing
      t.boolean :shedding
      t.boolean :meowing

      t.timestamps
    end
  end
end

class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :image_url, default: "http://res.cloudinary.com/mwong9968/image/upload/v1505765199/profile_default_v513qd.png"

      t.timestamps
    end
    add_index :users, :email, unique: true
  end
end

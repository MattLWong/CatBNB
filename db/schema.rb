# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170919042044) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bookings", force: :cascade do |t|
    t.integer "host_id", null: false
    t.integer "guest_id", null: false
    t.integer "listing_id", null: false
    t.date "check_in", null: false
    t.date "check_out", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["guest_id"], name: "index_bookings_on_guest_id"
    t.index ["host_id"], name: "index_bookings_on_host_id"
    t.index ["listing_id"], name: "index_bookings_on_listing_id"
  end

  create_table "cities", force: :cascade do |t|
    t.string "city_name"
    t.string "state"
    t.string "country"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "listings", force: :cascade do |t|
    t.string "title", null: false
    t.text "description", null: false
    t.integer "host_id", null: false
    t.string "street_address", null: false
    t.string "city", null: false
    t.integer "zip", null: false
    t.string "country", null: false
    t.string "apt"
    t.float "price", null: false
    t.string "cover_img_url", null: false
    t.boolean "deluxe_bed"
    t.boolean "house_dog_friend"
    t.boolean "gourmet_meals"
    t.boolean "free_grooming"
    t.boolean "maze_playground"
    t.boolean "air_conditioning"
    t.boolean "laser_tag"
    t.boolean "natural_light"
    t.boolean "cuddling_partner"
    t.boolean "spay_neuter"
    t.boolean "vaccinated"
    t.boolean "flea"
    t.boolean "peeing"
    t.boolean "shedding"
    t.boolean "meowing"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.float "latitude"
    t.float "longitude"
  end

  create_table "locations", force: :cascade do |t|
    t.string "address"
    t.float "latitude"
    t.float "longitude"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "reviews", force: :cascade do |t|
    t.text "description", null: false
    t.integer "rating", null: false
    t.integer "guest_id", null: false
    t.integer "listing_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["guest_id"], name: "index_reviews_on_guest_id"
    t.index ["listing_id"], name: "index_reviews_on_listing_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "image_url", default: "http://res.cloudinary.com/mwong9968/image/upload/v1505765199/profile_default_v513qd.png"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
  end

end

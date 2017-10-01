class Booking < ApplicationRecord
  validates :host_id, :guest_id, :listing_id, :check_in, :check_out, presence: true

  validate :start_comes_first

  belongs_to :host,
  primary_key: :id,
  foreign_key: :host_id,
  class_name: :User

  belongs_to :guest,
  primary_key: :id,
  foreign_key: :guest_id,
  class_name: :User

  belongs_to :listing,
  primary_key: :id,
  foreign_key: :listing_id,
  class_name: :Listing

  def start_comes_first
    return if check_in < check_out
    errors[:check_in] << "must come before end date"
    errors[:check_out] << "must come after start date"
  end
end

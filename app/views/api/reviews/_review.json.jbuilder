json.extract! review, :id, :rating, :description, :listing_id, :guest_id

json.date review.created_at
json.guest_img_url review.guest.image_url

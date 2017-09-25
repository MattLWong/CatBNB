json.partial! '/api/listings/listing', listing: @listing

json.reviews @reviews do |review|
  json.rating review.rating
  json.description review.description
  json.guest_id review.guest_id
  json.guest_img_url review.guest.image_url
end

json.average_rating @average_rating

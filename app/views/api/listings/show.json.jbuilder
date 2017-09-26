json.partial! '/api/listings/listing', listing: @listing

json.reviews @reviews do |review|
  json.rating review.rating
  json.description review.description
  json.guest_id review.guest_id
  json.guest_img_url review.guest.image_url
  json.first_name review.guest.first_name
  json.date review.created_at
end

json.average_rating @average_rating
json.average_rating_precise @average_rating_precise
json.host_image_url @listing.host.image_url
json.host_first_name @listing.host.first_name

json.extract! booking, :host_id, :guest_id, :listing_id, :check_in, :check_out, :id

json.cover_img_url booking.listing.cover_img_url
json.guest_img_url booking.guest.image_url
json.host_img_url booking.host.image_url

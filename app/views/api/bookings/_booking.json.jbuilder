json.extract! booking, :host_id, :guest_id, :listing_id, :check_in, :check_out, :id

json.guest booking.guest
json.host booking.host
json.listing booking.listing

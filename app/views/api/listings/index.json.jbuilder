@listings.each do |listing|
  listing.set! listing.id do
      json.partial! 'listing_summary', listing: listing
  end
end

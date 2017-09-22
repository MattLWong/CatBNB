@listings.each do |listing|
  json.set! listing.id do
      json.partial! 'listing_summary', listing: listing
  end
end

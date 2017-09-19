export const fetchListings = data => (
  $.ajax({
    method: 'GET',
    url: 'api/listings',
    data
  })
)

export const fetchListing = id => (
  $.ajax({
    method: "GET",
    url: `api/listings/${id}`
  })
)

export const createListing = data => (
  $.ajax({
    method: 'POST',
    url: 'api/listings',
    data
  })
)

export const createReview = data => (
  $.ajax({
    method: 'POST',
    url: 'api/reviews'
  })
)

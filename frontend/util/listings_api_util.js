export const fetchListings = data => (
  $.ajax({
    method: 'GET',
    url: 'api/listings',
    data
  })
)

export const createReview = data => (
  $.ajax({
    method: 'POST',
    url: 'api/reviews',
    data
  })
)

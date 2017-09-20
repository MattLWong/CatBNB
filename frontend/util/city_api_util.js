export const fetchCities = searchString => (
  $.ajax({
    method: 'GET',
    url: 'api/cities',
    data: ({searchString})
  })
)

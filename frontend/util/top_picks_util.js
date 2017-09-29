export const fetchTopPicks = () => (
  $.ajax({
    method: "GET",
    url: 'api/listings',
    data: {topPicks: true}
  })
)

const createBooking = data => (
  $.ajax({
    method: "POST",
    url: "/api/bookings",
    data
  })
)

const fetchBookings = (data) => (
  $.ajax({
    method: "GET",
    url: "/api/bookings",
    data
  })
)

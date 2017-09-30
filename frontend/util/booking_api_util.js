export const createBooking = data => (
  $.ajax({
    method: "POST",
    url: "/api/bookings",
    data
  })
)

export const fetchBookings = (data) => (
  $.ajax({
    method: "GET",
    url: "/api/bookings",
    data
  })
)

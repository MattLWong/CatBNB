class Api::BookingsController < ApplicationController
  def create
    @booking = Booking.create!(booking_params)
    render :show
  end

  def index
    @bookings = Booking.all

    if params(:guest_id)
      @bookings = Booking.where(guest_id: params(:guest_id))
    end

    if params(:host_id)
      @bookings = Booking.where(host_id: params(:host_id))
    end

    render :index
  end

  private

  def booking_params
    params.require(:booking).permit(
      :host_id,
      :guest_id,
      :listing_id,
      :check_in,
      :check_out
    )
  end
end

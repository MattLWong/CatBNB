class Api::BookingsController < ApplicationController
  def create
    @booking = Booking.create!(booking_params)
    render :show
  end

  def show
    @booking = Booking.find(params[:id])
    render :show
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

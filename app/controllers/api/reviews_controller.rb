class Api::ReviewsController < ApplicationController
  def create
    @review = Review.create!(review_params)
    render :show
  end

  private

  def review_params
    params.require(:review).permit(
      :description,
      :rating,
      :guest_id,
      :listing_id
    )
  end
end

class Api::ReviewsController < ApplicationController
  def create
    byebug
    @review = Review.create!(review_params)
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

class Api::ListingsController < ApplicationController
  # before_action :require_logged_in, only: [:create]

  def index

    listings = bounds ? Listing.in_bounds(bounds) : Listing.all

    if params[:minPrice] && params[:maxPrice]
      listings = listings.where(price: price_range)
    end

    if params[:minBeds]
      listings = listings.where(max_cats: cat_range)
    end
    @listings = listings
    render :index
  end

  def show
    @listing = Listing.find(params[:id])
    @reviews = Listing.find(params[:id]).reviews
    @average_rating = Listing.find(params[:id]).average_rating
  end

  def create
    @listing = Listing.new(listing_params)
    if @listing.save
      render :show
    else
      # see if this works
      render json: @listing.errors.messages, status: :unprecessable_entity
    end
  end

  private

  def price_range
    (params[:minPrice]..params[:maxPrice])
  end

  def cat_range
    ((params[:minBeds].to_i)..99)
  end

  def listing_params
    input = params.require(:listing).permit(
      :title,
      :description,
      :host_id,
      :street_address,
      :city,
      :zip,
      :country,
      :apt,
      :price,
      :cover_img_url,
      :max_cats
    )
  end

  def bounds
    params[:bounds]
  end
end

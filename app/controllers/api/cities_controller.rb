class Api::CitiesController < ApplicationController
  def index
    string = params[:searchString]
    @cities

    if string
      @cities = City.searchByString(string)
    else
      @cities = City.all
    end

    render :index
  end

  private
end

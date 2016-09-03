class LocationsController < ApplicationController

    before_action :authenticate_user!, except: [:index]

  def new
    @location = Location.new
  end

  def create
    @location = Location.new(location_params)
    @location.user_id = current_user.id
    if @location.save
      flash[:notice] = "location added!"
      redirect_to locations_path
    else
      render "locations/new"
    end
  end

  def index
    @locations = Location.all
  end

  def update
  end



  def edit
  end

  private

    def location_params
      params.require(:location).permit(:name, :description, :lat, :long)
    end

end

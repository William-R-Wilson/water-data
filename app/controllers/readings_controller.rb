class ReadingsController < ApplicationController

  def new
    @location = Location.find(params[:location_id])
    @reading = Reading.new
  end

  def create
    @reading = Reading.new(reading_params)
    @reading.user_id = current_user.id
    @location = Location.find(params[:location_id])
    @reading.location_id = @location.id  #need to test this
    if @reading.save
      flash[:notice] = "reading added!"
      redirect_to locations_path
    else
      render "readings/new"
    end
  end

  def index
    @location = Location.find(params[:location_id])
    @readings = Reading.where(location_id: @location.id)
  end

  def update
  end

  def edit
  end

  private

    def reading_params
      params.require(:reading).permit(:location_id, :user_id, :ph, :conductivity, :date_observed,
                                      :time_observed, :weather, :water_temp, :TDS, :observations)
    end


end

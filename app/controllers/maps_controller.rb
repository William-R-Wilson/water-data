class MapsController < ApplicationController

  def view
    gon.locations = []
    Location.all.each do |l|
      loc = {name: l.name, lat: l.lat, long: l.long, type: l.location_type}
      gon.locations.push(loc)
    end
  end

  private


end

class MapsController < ApplicationController

  def view
    gon.locations = Location.all.map { |l| [l.name, l.lat, l.long] }
  end

end

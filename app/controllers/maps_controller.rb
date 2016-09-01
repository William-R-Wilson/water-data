class MapsController < ApplicationController

  def view
    gon.locations = Location.all.map { |l| l.name }
  end

end

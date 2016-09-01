class AddLatLongToLocations < ActiveRecord::Migration
  def change
    add_column :locations, :lat, :string
    add_column :locations, :long, :string
    remove_column :locations, :gps
  end
end

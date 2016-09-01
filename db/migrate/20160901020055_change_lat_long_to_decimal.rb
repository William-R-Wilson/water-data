class ChangeLatLongToDecimal < ActiveRecord::Migration
  def change
    remove_column :locations, :lat
    remove_column :locations, :long
    add_column :locations, :lat, :decimal
    add_column :locations, :long, :decimal
  end
end

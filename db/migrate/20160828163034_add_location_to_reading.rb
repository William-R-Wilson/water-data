class AddLocationToReading < ActiveRecord::Migration
  def change
    add_reference :readings, :location, index: true, foreign_key: true
  end
end

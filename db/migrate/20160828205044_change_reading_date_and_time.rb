class ChangeReadingDateAndTime < ActiveRecord::Migration
  def change
    change_column :readings, :time, :time
    add_column :readings, :date, :date
  end
end

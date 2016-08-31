class ChangeReadingsDateandTime < ActiveRecord::Migration
  def change
    rename_column :readings, :date, :date_observed
    rename_column :readings, :time, :time_observed
  end
end

class RemoveIntegerFromReadings < ActiveRecord::Migration
  def change
    remove_column :readings, :integer, :string
  end
end

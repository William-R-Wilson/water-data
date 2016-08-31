class CreateReadings < ActiveRecord::Migration
  def change
    create_table :readings do |t|
      t.decimal :ph
      t.integer :conductivity
      t.datetime :time
      t.text :weather
      t.integer :water_temp
      t.string :TDS
      t.string :integer
      t.text :observations

      t.timestamps null: false
    end
  end
end

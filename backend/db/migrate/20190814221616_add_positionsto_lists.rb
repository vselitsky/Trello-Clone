class AddPositionstoLists < ActiveRecord::Migration[5.2]
  def change
     add_column :lists, :card_positions, :integer, array: true, default: []
  end
end

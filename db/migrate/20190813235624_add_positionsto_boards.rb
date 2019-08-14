class AddPositionstoBoards < ActiveRecord::Migration[5.2]
  def change
    add_column :boards, :list_positions, :integer, array: true, default: []
  end
end

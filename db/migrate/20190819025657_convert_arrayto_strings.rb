class ConvertArraytoStrings < ActiveRecord::Migration[5.2]
  def change
    add_column :lists, :card_card_positions, :string, array: true, default: []
    add_column :boards, :list_list_positions, :string, array: true, default: []
    remove_index :lists, :card_positions
    remove_index :boards, :list_positions
  end
end

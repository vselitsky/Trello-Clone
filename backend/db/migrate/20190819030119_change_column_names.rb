class ChangeColumnNames < ActiveRecord::Migration[5.2]
  def change
    remove_column :boards, :list_positions
    remove_column :lists, :card_positions
    rename_column :boards, :list_list_positions, :list_positions
    rename_column :lists, :card_card_positions, :card_positions
  end
end

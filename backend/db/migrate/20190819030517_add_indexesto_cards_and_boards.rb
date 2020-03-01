class AddIndexestoCardsAndBoards < ActiveRecord::Migration[5.2]
  def change
    add_index :lists, :card_positions, using: 'gin'
    add_index :boards, :list_positions, using: 'gin'
  end
end

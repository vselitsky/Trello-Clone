class AddIndextoCardPositions < ActiveRecord::Migration[5.2]
  def change
    add_index :lists, :card_positions, using: 'gin'
  end
end

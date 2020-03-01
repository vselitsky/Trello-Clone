class AddIndextoPositions < ActiveRecord::Migration[5.2]
  def change
    add_index :boards, :list_positions, using: 'gin'
  end
end

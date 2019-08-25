class AddIndextoRecentBoards < ActiveRecord::Migration[5.2]
  def change
     add_index :users, :recent_boards, using: 'gin'
  end
end

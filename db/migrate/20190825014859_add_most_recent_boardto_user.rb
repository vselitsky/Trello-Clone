class AddMostRecentBoardtoUser < ActiveRecord::Migration[5.2]
  def change
   add_column :users, :recent_boards, :string, array: true, default: [] 
  end
end

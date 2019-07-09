class RemoveUserIndex < ActiveRecord::Migration[5.2]
  def change
    remove_index :users, :email
    change_column_null :users, :email, true

  end
end

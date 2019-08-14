class AddPositionToLists < ActiveRecord::Migration[5.2]
  def change
    add_column :lists, :position, :integer
  end
end

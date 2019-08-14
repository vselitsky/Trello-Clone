

json.extract! @board, :title, :owner_id, :id, :list_positions 
json.lists do
  json.array! @board.lists.each do |list|
        json.extract! list, :id, :position
                
        end
end



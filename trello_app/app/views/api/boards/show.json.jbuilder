

json.extract! @board, :title, :owner_id, :id 
json.lists do
 json.array! @board.lists.each do |list|
 
 json.extract! list, :id, :board_id, :title

        end
end

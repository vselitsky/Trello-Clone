
@boards.each do |board|
json.set! board.id do
    json.extract! board, :id, :title, :owner_id 

end
end
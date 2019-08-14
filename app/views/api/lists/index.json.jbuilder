@lists.each do |list|
json.set! list.id do
    json.extract! list, :id, :title, :board_id, :position 
    json.cards list.cards

end
end


json.extract! @board, :title, :id, :list_positions 
json.lists do
     @board.lists.each do |list|
      json.set! list.id do
        json.extract! list, :id, :title, :board_id, :card_positions
        end

         json.cards do 
                list.cards.each do |card|
                 json.set! card.id do
                json.extract! card, :id, :title, :list_id
                end


                end
                end
        
    end
end




json.extract! @list, :title, :board_id, :id, :card_positions 
json.cards do
     @list.cards.each do |card|
      json.set! card.id do
        json.extract! card, :id, :title, :list_id
        end
    end
end

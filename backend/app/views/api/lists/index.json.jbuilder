@lists.each do |list|
json.set! list.id do
    json.extract! list, :id, :title, :board_id, :card_positions 
    json.cards do
     list.cards.each do |card|
      json.set! card.id do
        json.extract! card, :id, :title, :list_id
            end
        end
        end
    end
end

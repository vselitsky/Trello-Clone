class Card < ApplicationRecord

    belongs_to :list,
    foreign_key: :list_id,
    class_name: :List
end

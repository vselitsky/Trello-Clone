class List < ApplicationRecord
    validates :title, uniqueness: true
    has_many :cards,
    foreign_key: :list_id,
    class_name: :Card

    belongs_to :board,
    foreign_key: :board_id,
    class_name: :Board
end

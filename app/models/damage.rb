class Damage < ApplicationRecord
    validates :description, presence: true

    has_one_attached :photo

    
end

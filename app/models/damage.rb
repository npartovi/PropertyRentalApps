class Damage < ApplicationRecord
    validates :description, :address_id,  presence: true

    has_one_attached :photo

    belongs_to :address,
        class_name: 'Address',
        foreign_key: :address_id

end

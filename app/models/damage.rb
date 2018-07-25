class Damage < ApplicationRecord
    validates :description, :address_id,  presence: true

    validate :ensure_photo

    has_one_attached :photo

    belongs_to :address,
        class_name: 'Address',
        foreign_key: :address_id

    def ensure_photo
        unless self.photo.attached?
            errors[:photo] << "must be attached"
        end
    end

end

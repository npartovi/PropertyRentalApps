class Address < ApplicationRecord

	validates :street, :city, :state, :zip_code, :user_id, presence: true

	belongs_to :user,
		class_name: 'User',
		foreign_key: :user_id
end

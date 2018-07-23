class AddAddressIdToDamage < ActiveRecord::Migration[5.2]
  def change
    add_column :damages, :address_id, :integer
  end
end

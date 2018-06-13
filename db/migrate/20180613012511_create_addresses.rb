class CreateAddresses < ActiveRecord::Migration[5.1]
  def change
    create_table :addresses do |t|
    	t.string :street, null: false
    	t.string :city, null: false
    	t.string :state, null: false
    	t.string :zip_code, null: false
    	t.string :suite
    	t.string :tenant_first_name
    	t.string :tenant_last_name
    	t.integer :user_id, null: false

      t.timestamps
    end
    add_index(:addresses, [:user_id, :street])
  end
end

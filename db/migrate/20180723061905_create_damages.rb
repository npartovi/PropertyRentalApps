class CreateDamages < ActiveRecord::Migration[5.2]
  def change
    create_table :damages do |t|
        t.string :description
      t.timestamps
    end
    add_index(:damages, :description)
  end
end

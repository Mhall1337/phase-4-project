class CreateToDos < ActiveRecord::Migration[6.1]
  def change
    create_table :to_dos do |t|
      t.string :to_do
      t.integer :user_id
      t.string :date_due

      t.timestamps
    end
  end
end

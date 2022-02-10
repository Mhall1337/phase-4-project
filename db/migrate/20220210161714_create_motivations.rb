class CreateMotivations < ActiveRecord::Migration[6.1]
  def change
    create_table :motivations do |t|
      t.string :quote

      t.timestamps
    end
  end
end

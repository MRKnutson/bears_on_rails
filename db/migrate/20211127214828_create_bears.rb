class CreateBears < ActiveRecord::Migration[6.1]
  def change
    create_table :bears do |t|
      t.string :species
      t.string :environment

      t.timestamps
    end
  end
end

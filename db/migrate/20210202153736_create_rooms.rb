class CreateRooms < ActiveRecord::Migration[6.1]
  def change
    create_table :rooms do |t|
      t.string :hotel_id
      t.string :room_id
      t.string :room_no
      t.string :room_name
      t.string :room_type_id
      t.string :room_price
      t.string :capacity
      t.string :status
      t.string :is_active
      t.string :created_by
      t.string :updated_by

      t.timestamps
    end
  end
end

json.extract! room, :id, :hotel_id, :room_id, :room_no, :room_name, :room_type_id, :room_price, :capacity, :status, :is_active, :created_by, :updated_by, :created_at, :updated_at
json.url room_url(room, format: :json)

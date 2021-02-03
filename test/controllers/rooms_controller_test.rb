require "test_helper"

class RoomsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @room = rooms(:one)
  end

  test "should get index" do
    get rooms_url
    assert_response :success
  end

  test "should get new" do
    get new_room_url
    assert_response :success
  end

  test "should create room" do
    assert_difference('Room.count') do
      post rooms_url, params: { room: { capacity: @room.capacity, created_by: @room.created_by, hotel_id: @room.hotel_id, is_active: @room.is_active, room_id: @room.room_id, room_name: @room.room_name, room_no: @room.room_no, room_price: @room.room_price, room_type_id: @room.room_type_id, status: @room.status, updated_by: @room.updated_by } }
    end

    assert_redirected_to room_url(Room.last)
  end

  test "should show room" do
    get room_url(@room)
    assert_response :success
  end

  test "should get edit" do
    get edit_room_url(@room)
    assert_response :success
  end

  test "should update room" do
    patch room_url(@room), params: { room: { capacity: @room.capacity, created_by: @room.created_by, hotel_id: @room.hotel_id, is_active: @room.is_active, room_id: @room.room_id, room_name: @room.room_name, room_no: @room.room_no, room_price: @room.room_price, room_type_id: @room.room_type_id, status: @room.status, updated_by: @room.updated_by } }
    assert_redirected_to room_url(@room)
  end

  test "should destroy room" do
    assert_difference('Room.count', -1) do
      delete room_url(@room)
    end

    assert_redirected_to rooms_url
  end
end

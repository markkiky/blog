require "application_system_test_case"

class RoomsTest < ApplicationSystemTestCase
  setup do
    @room = rooms(:one)
  end

  test "visiting the index" do
    visit rooms_url
    assert_selector "h1", text: "Rooms"
  end

  test "creating a Room" do
    visit rooms_url
    click_on "New Room"

    fill_in "Capacity", with: @room.capacity
    fill_in "Created by", with: @room.created_by
    fill_in "Hotel", with: @room.hotel_id
    fill_in "Is active", with: @room.is_active
    fill_in "Room", with: @room.room_id
    fill_in "Room name", with: @room.room_name
    fill_in "Room no", with: @room.room_no
    fill_in "Room price", with: @room.room_price
    fill_in "Room type", with: @room.room_type_id
    fill_in "Status", with: @room.status
    fill_in "Updated by", with: @room.updated_by
    click_on "Create Room"

    assert_text "Room was successfully created"
    click_on "Back"
  end

  test "updating a Room" do
    visit rooms_url
    click_on "Edit", match: :first

    fill_in "Capacity", with: @room.capacity
    fill_in "Created by", with: @room.created_by
    fill_in "Hotel", with: @room.hotel_id
    fill_in "Is active", with: @room.is_active
    fill_in "Room", with: @room.room_id
    fill_in "Room name", with: @room.room_name
    fill_in "Room no", with: @room.room_no
    fill_in "Room price", with: @room.room_price
    fill_in "Room type", with: @room.room_type_id
    fill_in "Status", with: @room.status
    fill_in "Updated by", with: @room.updated_by
    click_on "Update Room"

    assert_text "Room was successfully updated"
    click_on "Back"
  end

  test "destroying a Room" do
    visit rooms_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Room was successfully destroyed"
  end
end

import React from "react";
import { Link } from "react-router-dom";

export default function Room({ meetingRoom }) {
  return (
    <tr>

      <td>
        <Link to={`/meetingRooms/${meetingRoom.id}`}>{meetingRoom.room_name}</Link>
      </td>
      <td>{meetingRoom.building_level}</td>
      <td>{meetingRoom.capacity}</td>
    </tr>
  );
}

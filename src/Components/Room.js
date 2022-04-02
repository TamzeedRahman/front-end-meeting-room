import React from "react";
import { Link } from "react-router-dom";

export default function Room({ meetingRoom, id }) {
  return (
    <tr>

      <td>
        <Link to={`/meetingRooms/${id}`}>{meetingRoom.name}</Link>
      </td>
      <td>{meetingRoom.floor}</td>
      <td>{meetingRoom.capacity}</td>
    </tr>
  );
}

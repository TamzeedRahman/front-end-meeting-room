import React from "react";
import { Link } from "react-router-dom";

export default function Booking({ booking }) {
  return (
    <tr>

      <td>
        <Link to={`/bookings/${booking.id}`}>{booking.meeting_name}</Link>
      </td>

      <td>{booking.time_start}</td>

      <td>{booking.time_end}</td>

      <td>{booking.attendees}</td>
   
    </tr>
  );
}

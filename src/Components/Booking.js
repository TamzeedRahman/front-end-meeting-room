import React from "react";
import { Link } from "react-router-dom";

export default function Booking({ booking, id }) {
  return (
    <tr>

      <td>
        <Link to={`/bookings/${id}`}>{booking.bookingName}</Link>
      </td>

      <td>{booking.start}</td>

      <td>{booking.end}</td>

      <td>{booking.attendees}</td>
    </tr>
  );
}

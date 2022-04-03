import { useState } from "react";
import { useParams } from "react-router-dom";
import BookingDetails from "../Components/BookingDetails";
import React from 'react'

function ShowBooking({ bookings, deleteBooking }) {
  let { id } = useParams();
  const [booking] = useState(bookings[id]);
  return (
    <div className="ShowBooking">
      <h2 className="mt-3">Booking Details</h2>
      <section>
        <BookingDetails
          booking={booking}
          id={id}
          deleteBooking={deleteBooking}
        />
      </section>
    </div>
  );
}

export default ShowBooking;

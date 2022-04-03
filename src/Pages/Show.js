import { useState } from "react";
import { useParams } from "react-router-dom";
import RoomDetails from "../Components/RoomDetails";
import React from 'react';
import Bookings from "../Components/Bookings";
import BookingNewForm from "../Components/BookingNewForm";
import BookingDetails from "../Components/BookingDetails";
import uuid from "react-uuid";

function Show({ rooms, addBooking, deleteMeetingRoom, 
  fetchBookingByMeetingRoomId}) {
  let { id } = useParams();
  const [room] = useState(rooms[id]);

  return (
    <div className="Show">
      <h2 className="mt-3">Room Details</h2>
      <section>
        <RoomDetails
          room={room}
          id={id}
          deleteMeetingRoom={deleteMeetingRoom}
        />
      </section>


    <div className="New">
      <h2 className="mt-3">Create a Booking</h2>
      <BookingNewForm addBooking={addBooking} />
    </div>

    <tbody>
        <Bookings bookings={fetchBookingByMeetingRoomId(id)}/>
    </tbody>

    
    {/* <table className="table">
        <thead>
          <tr>
          
            <th scope="col">Meeting Name</th>
            <th scope="col">Start</th>
            <th scope="col">End</th>
            <th scope="col">Attendees</th>
            
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">{booking.meeting_name}</th>
            <td>{booking.time_start}</td>
            <td>{booking.time_end}</td>
            <td>{booking.attendees}</td>
          </tr>
        </tbody>
      </table> */}

    </div>




  );
}

export default Show;

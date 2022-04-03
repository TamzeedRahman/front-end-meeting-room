import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RoomDetails from "../Components/RoomDetails";
import React from 'react';
import BookingNewForm from "../Components/BookingNewForm";
import uuid from "react-uuid";
import { Link } from "react-router-dom";
import axios from "axios";
import { apiURL } from "../util/apiURL";

const API_BASE = apiURL();

function Show({ rooms, addBooking, deleteMeetingRoom, bookings, fetchBookings}) {
  let { id } = useParams();
  const [room] = useState(rooms[id]);
  const [booking, setBooking] = useState([]);

  const handleFetchBookings = () => {
    fetchBookings(id);
  };

  return (
    <div className="Show">
      <h2 className="mt-3">Room Details</h2>
      <p>Click Current Bookings to view scheduled bookings for this meeting room.</p>
      <p>To schedule a new booking, fill out the information and hit Submit.</p>
      <section>
        <RoomDetails
          room={room}
          id={id}
          deleteMeetingRoom={deleteMeetingRoom}
        />
        <div >
        <button onClick={handleFetchBookings} className="btn btn-primary m-3 " >  
        <Link to={`/meetingRooms/${id}/bookings`} className="link-light">
            Current Bookings
          </Link>
        </button>
        </div>
      </section>


    <div className="New">
      <h2 className="mt-3">Create a Booking</h2>
      <BookingNewForm addBooking={addBooking} />
    </div>

    
  
    </div>




  );
}

export default Show;

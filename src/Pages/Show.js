import { useState } from "react";
import { useParams } from "react-router-dom";
import RoomDetails from "../Components/RoomDetails";
import React from 'react'

function Show({ rooms }) {
  let { id } = useParams();
  const [room] = useState(rooms[id]);
  return (
    <div className="Show">
      <h2 className="mt-3">Room Details</h2>
      <section>
        <RoomDetails
          room={room}
          id={id}
         
        />
      </section>
    </div>
  );
}

export default Show;

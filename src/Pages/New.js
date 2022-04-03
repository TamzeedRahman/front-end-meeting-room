import RoomNewForm from "../Components/RoomNewForm";
import React from 'react'
function New({ addRoom }) {
  return (
    <div className="New">
      <h2 className="mt-3">Create a Room</h2>
      <p>Fill out the information and hit Submit to create a new Meeting Room. </p>
      <RoomNewForm addRoom={addRoom} />
    </div>
  );
}

export default New;

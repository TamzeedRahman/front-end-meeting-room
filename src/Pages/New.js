import RoomNewForm from "../Components/RoomNewForm";
import React from 'react'
function New({ addRoom }) {
  return (
    <div className="New">
      <h2 className="mt-3">Create a Room</h2>
      <RoomNewForm addRoom={addRoom} />
    </div>
  );
}

export default New;

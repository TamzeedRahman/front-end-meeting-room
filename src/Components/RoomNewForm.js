import React from "react";
import { useState } from "react";
import { withRouter } from "react-router-dom";

function RoomNewForm(props) {
  const [room, setRoom] = useState({
    name: "",
    floor: "",
    capacity: "",

  });

  const handleTextChange = (event) => {
    setRoom({ ...room, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addRoom(room);
    props.history.push("/meetingRooms");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="row">
        <div className="col-md col-lg-3">
            <label htmlFor="name">Room Name:</label>
            <input
              id="name"
              value={room.name}
              type="text"
              className="form-control"
              onChange={handleTextChange}
              required
            />
          </div>  
          <div className="col-sm col-lg-3">
            <label htmlFor="floor">Floor:</label>
            <input
              id="floor"
              value={room.floor}
              type="text"
              className="form-control"
              onChange={handleTextChange}
              required
            />
          </div>
          <div className="col-sm col-lg-3">
            <label htmlFor="capacity">Capacity:</label>
            <input
              id="capacity"
              type="text"
              className="form-control"
              value={room.capacity}
              onChange={handleTextChange}
              required
            />
          </div>
          <div className="col-lg col-lg-12">
            <div className="row mt-3">
              <div className="col-sm">
                <input type="submit" className="btn btn-primary" />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default withRouter(RoomNewForm);

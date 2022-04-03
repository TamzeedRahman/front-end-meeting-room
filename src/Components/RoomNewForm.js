import React from "react";
import { useState } from "react";
import {  withRouter, useHistory} from "react-router-dom";

function RoomNewForm(props) { 
  let history = useHistory()
  const [room, setRoom] = useState({
    room_name: "",
    building_level: "",
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
const handleCancel = () => {
  history.push("/meetingRooms")
}

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="row">
        <div className="col-md col-lg-3">
            <label htmlFor="room_name">Room Name:</label>
            <input
              id="room_name"
              value={room.room_name}
              type="text"
              className="form-control"
              onChange={handleTextChange}
              required
            />
          </div>  
          <div className="col-sm col-lg-3">
            <label htmlFor="building_level">Floor:</label>
            <input
              id="building_level"
              value={room.building_level}
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
              <input type="button" onClick={handleCancel} value="cancel" className="btn btn-primary" />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default withRouter(RoomNewForm);

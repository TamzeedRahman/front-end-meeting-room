import React from "react";
import { useState } from "react";
import { withRouter, useHistory } from "react-router-dom";

function BookingNewForm(props) {
  let history = useHistory()
  const [booking, setBooking] = useState({
    meeting_name: "",
    time_start: "",
    time_end: "",
    attendees: "",
  });

  const handleTextChange = (event) => {
    setBooking({ ...booking, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addBooking(booking);
    props.history.push("/bookings");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="row">
        <div className="col-md col-lg-3">
            <label htmlFor="meeting_name">Meeting Name:</label>
            <input
              id="meeting_name"
              value={booking.meeting_name}
              type="text"
              className="form-control"
              onChange={handleTextChange}
              required
            />
          </div>  
          <div className="col-sm col-lg-3">
            <label htmlFor="time_start">Start:</label>
            <input
              id="time_start"
              value={booking.time_start}
              type="text"
              className="form-control"
              onChange={handleTextChange}
              required
            />
          </div>
          <div className="col-sm col-lg-3">
            <label htmlFor="time_end">End:</label>
            <input
              id="time_end"
              type="text"
              className="form-control"
              value={booking.time_end}
              onChange={handleTextChange}
              required
            />
          </div>
          <div className="col-sm col-lg-3">
            <label htmlFor="attendees">Attendees:</label>
            <input
              id="attendees"
              type="text"
              className="form-control"
              value={booking.attendees}
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

export default withRouter(BookingNewForm);
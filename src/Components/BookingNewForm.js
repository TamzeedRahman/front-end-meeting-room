import React from "react";
import { useState } from "react";
import { withRouter } from "react-router-dom";

function BookingNewForm(props) {
  const [booking, setBooking] = useState({
    bookingName: "",
    start: "",
    end: "",
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
            <label htmlFor="bookingName">Meeting Name:</label>
            <input
              id="name"
              value={booking.bookingName}
              type="text"
              className="form-control"
              onChange={handleTextChange}
              required
            />
          </div>  
          <div className="col-sm col-lg-3">
            <label htmlFor="start">Start:</label>
            <input
              id="start"
              value={booking.start}
              type="text"
              className="form-control"
              onChange={handleTextChange}
              required
            />
          </div>
          <div className="col-sm col-lg-3">
            <label htmlFor="end">End:</label>
            <input
              id="end"
              type="text"
              className="form-control"
              value={booking.end}
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
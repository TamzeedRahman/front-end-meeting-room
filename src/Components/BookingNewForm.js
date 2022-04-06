

import React from "react";
import { useState } from "react";
import { withRouter } from "react-router-dom";



function BookingNewForm(props) {

  const [booking, setBooking] = useState({
    meeting_room_id: "",
    meeting_name: "",
    time_start: "",
    time_end: "",
    attendees: "",
  });


  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

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
              type="datetime-local"
              className="form-control"
              value={startDate}
              onChange={(event) => {
                setStartDate(event.target.value);
                setBooking({ ...booking, time_start: event.target.value });
              }}
              required
            />
       
          </div>
          <div className="col-sm col-lg-3">
            <label htmlFor="time_end">End:</label>
            <input 
        
              id="time_end"
              type="datetime-local"
              dateFormat="MM/dd/yyyy h:mm a"
              className="form-control"
              value={endDate}
              onChange={  (event) => {  setEndDate(event.target.value);
                setBooking({ ...booking, time_end: event.target.value });
              }}
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
              <div className="col-mt-3 mr-1">
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
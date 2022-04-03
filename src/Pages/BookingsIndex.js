import Bookings from "../Components/Bookings";
import { apiURL } from "../util/apiURL";
import React from 'react'

import axios from "axios";
import { useState, useEffect } from "react";

const API_BASE = apiURL();

function BookingsIndex() {
  const [bookings, setBooking] = useState([]);

  useEffect(() => {
    axios.get(`${API_BASE}/bookings`).then((response) => {
      setBooking(response.data.payload);
    });
  }, []);

  return (<>
  <h1>Bookings</h1>
    <div className="container">
      <p>Here are all the scheduled Bookings. Click on the meeting name to view more details. </p>
      <div className="row mt-3">
        <div className="row mt-3">
          <div className="col-sm">
          <Bookings bookings={bookings} />
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default BookingsIndex;

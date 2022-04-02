import Bookings from "../Components/Bookings";
import { apiURL } from "../util/apiURL";
import React from 'react'

import axios from "axios";
import { useState, useEffect } from "react";

const API_BASE = apiURL();

function BookingsIndex() {
  const [bookings, setBooking] = useState("");

  useEffect(() => {
    axios.get(`${API_BASE}/booking`).then((response) => {
      const { data } = response;
      setBooking(String(data.booking));
    });
  }, [bookings]);


  return (
    <div className="container">
      <div className="row mt-3">
        <div className="row mt-3">
          <div className="col-sm">
          <Bookings bookings={bookings} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingsIndex;

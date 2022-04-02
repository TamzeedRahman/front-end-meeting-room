import Rooms from "../Components/Rooms";
import { apiURL } from "../util/apiURL";
import React from 'react'

import axios from "axios";
import { useState, useEffect } from "react";

const API_BASE = apiURL();

function Index() {
  const [rooms, setRoom] = useState("");

  useEffect(() => {
    axios.get(`${API_BASE}/meetingRooms`).then((response) => {
      const { data } = response;
      setRoom(String(data.room));
    });
  }, [rooms]);

  

  return (
    <div className="container">
      <div className="row mt-3">
        <div className="row mt-3">
          <div className="col-sm">
            <Rooms rooms={rooms} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;

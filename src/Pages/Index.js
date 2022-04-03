import Rooms from "../Components/Rooms";
import { apiURL } from "../util/apiURL";
import React from 'react'

import axios from "axios";
import { useState, useEffect } from "react";

const API_BASE = apiURL();

function Index() {
  const [rooms, setRoom] = useState([]);

  useEffect(() => {
    
    axios.get(`${API_BASE}/meetingRooms`).then((response) => {
      setRoom(response.data.payload);
    });
  }, []);

  

  return (<>

   <h1>Meeting Rooms</h1>

    <div className="container">
       <p>Here are all the available Meeting Rooms. Click on the room name to view more details. </p>
      <div className="row mt-3">
        <div className="row mt-3">
          <div className="col-sm">
            <Rooms meetingRooms={rooms} />
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Index;

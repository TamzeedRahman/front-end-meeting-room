import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect, } from "react";
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import axios from "axios";
import React from 'react'

import { apiURL } from "./util/apiURL";
import Navbar from "./Components/Navbar";

import FourOFour from "./Pages/FourOFour";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import BookingsIndex from "./Pages/BookingsIndex";
import New from "./Pages/New";
import Show from "./Pages/Show";
import ShowBooking from "./Pages/ShowBooking";

const API_BASE = apiURL();

function App() {
  let history = useHistory();
  const [rooms, setRoom] = useState([]);
  const [bookings, setBooking] = useState([]);
  

  const fetchData = async () => {
    await axios.get(`${API_BASE}/meetingRooms`).then((response) => {
      setRoom(response.data.payload);
    });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const addRoom = (newRoom) => {
     axios 
     .post (`${API_BASE}/meetingRooms`, newRoom)
     .then((response) =>{
       setRoom([...rooms, newRoom])
       
     } ).catch((e) => {
       console.log(e)
     })
  }

  const deleteMeetingRoom= (id) => {
    axios
      .delete(`${API_BASE}/meetingRooms/${id}`)
      .then(
        (response) => {
          const meetingRoomsCopy = [...rooms];
          meetingRoomsCopy.splice(
            rooms.findIndex((room) => room.id === Number(id)),
            1
          );
          setRoom(meetingRoomsCopy);
          // history.push("/bookings");
        } ).catch((c) => {
        console.warn("catch", c);
      })
  }

  useEffect(() => {
    deleteMeetingRoom();
  }, []);
    
//_____________________________________________________
  const fetchBookingData = async () => {
    await axios.get(`${API_BASE}/bookings`).then((response) => {
      setRoom(response.data.payload);
    });
   
  };

  useEffect(() => {
    fetchBookingData();
  }, []);

  const addBooking = (newBooking) => {
  axios 
  .post (`${API_BASE}/bookings`, newBooking)
  .then((response) =>{
    setBooking([...bookings, newBooking])
    
  } ).catch((e) => {
    console.log(e)
  })
}

  const deleteBooking = (id) => {
    axios
      .delete(`${API_BASE}/bookings/${id}`)
      .then(
        (response) => {
          const bookingsCopy = [...bookings];
          bookingsCopy.splice(
            bookings.findIndex((booking) => booking.id === Number(id)),
            1
          );
          setBooking(bookingsCopy);
          // history.push("/bookings");
        } ).catch((c) => {
        console.warn("catch", c);
      })
  }

  useEffect(() => {
    deleteBooking();
  }, []);

  const fetchBookingByMeetingRoomId = (meeting_room_id) => {
    axios
      .get(`${API_BASE}/meetingRooms/${meeting_room_id}/bookings`)
      .then(
        (response) => {
          const bookingsResult = bookings.filter(booking => booking.meeting_room_id == Number(meeting_room_id)
      
          );
          setBooking(bookingsResult);
          //console.log(`Result:${typeof(bookingsResult)}`);
          // history.push("/bookings");
        } ).catch((c) => {
        console.warn("catch", c);
      })
  }

  useEffect(() => {
    fetchBookingByMeetingRoomId();
  }, []);


  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="container">
          <main>
            <Switch>
              <Route exact path="/">
                {" "}
                <Home />{" "}
              </Route>

              <Route path="/meetingRooms/new">
                {" "}
                <New addRoom={addRoom} />{" "}
              </Route>

             
              <Route path="/meetingRooms/:id">
                {" "}
                <Show
                  rooms={rooms} addBooking={addBooking} deleteMeetingRoom={deleteMeetingRoom}
                  fetchBookingByMeetingRoomId={fetchBookingByMeetingRoomId}
                />{" "}
              </Route>
              <Route path="/meetingRooms">
                {" "}
                <Index rooms={rooms} />{" "}
              </Route>
            
              <Route path="/bookings/:id">
                {" "}
                <ShowBooking
                  bookings={bookings} deleteBooking={deleteBooking}
                />{" "}
              </Route>
              <Route path="/bookings">
                {" "}
                <BookingsIndex bookings={bookings} />{" "}
              </Route>
              <Route path="*">
                {" "}
                <FourOFour />{" "}
              </Route>
            </Switch>
          </main>
        </div>
      </Router>
    </div>
  );
}
export default App;

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
import RoomBookings from "./Pages/RoomBookings";
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
const fetchRoomBookingData = async (id) => {
  await axios.get(`${API_BASE}/meetingRooms/${id}/bookings`).then((response) => {
    setBooking(response.data.payload);
  });
 
};

useEffect(() => {
  fetchRoomBookingData();
}, []);

const fetchBookingData = async () => {
    await axios.get(`${API_BASE}/bookings`).then((response) => {
      setBooking(response.data.payload);
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
              <Route path="/meetingRooms/:id/bookings">
                {" "}
                <RoomBookings bookings={bookings}/>{" "}
              </Route>
             
              <Route path="/meetingRooms/:id">
                {" "}
                <Show
                  rooms={rooms} addBooking={addBooking} deleteMeetingRoom={deleteMeetingRoom}
                  bookings={bookings} fetchBookings={fetchRoomBookingData }
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


      <div className="container-flex-fill">
  <footer  className=" bg-light d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">

      
    <p className="col-md-4 mb-0 text-muted">&copy; 2022 BXTI Meeting Room Booking</p>

    <p className="col-md-4 mb-0 text-muted">Made with React and Bootstrap <div> </div> By Tamzeed Rahman</p>
    
  </footer>
  
</div>    
    </div>
  );
}
export default App;

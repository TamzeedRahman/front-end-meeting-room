import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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

const API_BASE = apiURL();

function App() {
  const [rooms, setRoom, bookings, setBooking] = useState("");
  

  const fetchData = async () => {
    await axios.get(`${API_BASE}/meetingRooms`).then((response) => {
      const { data } = response;
      setRoom(data);
    });
   
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addRoom = (newRoom) => {
    axios
      .post(`${API_BASE}/meetingRooms`, newRoom)
      .then(
        (response) => {
          axios.get(`${API_BASE}/meetingRooms`);
          setRoom((prevRoom) => [
            ...prevRoom,
            response.data,
          ]);
        },
        (error) => {
          console.log(error);
        }
      )
      .catch((c) => {
        console.warn("catch", c);
      });
   
  };

//_____________________________________________________
  const fetchBookingData = async () => {
    await axios.get(`${API_BASE}/bookings`).then((response) => {
      const { data } = response;
      // setBooking(data);
    });
   
  };

  useEffect(() => {
    fetchBookingData();
  }, []);

  const addBooking = (newRoom) => {
    axios
      .post(`${API_BASE}/bookings`, newRoom)
      .then(
        (response) => {
          axios.get(`${API_BASE}/bookings`);
          setBooking((prevRoom) => [
            ...prevRoom,
            response.data,
          ]);
        },
        (error) => {
          console.log(error);
        }
      )
      .catch((c) => {
        console.warn("catch", c);
      });
   
  };

  const deleteBooking = (id) => {
    axios
      .delete(`${API_BASE}/bookings/${id}`)
      .then(
        (response) => {
          const bookingsCopy = [...bookings];
          bookingsCopy.splice(id, 1);
          setBooking(bookingsCopy);
        },
        (error) => {
          console.log(error);
        }
      )
      .catch((c) => {
        console.warn("catch", c);
      });
 
  };


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
                  rooms={rooms}
                />{" "}
              </Route>
              <Route path="/meetingRooms">
                {" "}
                <Index rooms={rooms} />{" "}
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

import React from 'react'
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <button className="btn btn-primary">
          <Link to="/meetingRooms" className="link-light">
            Meeting Rooms
          </Link>
        </button>

        <button className="btn btn-primary">
          <Link to="/bookings" className="link-light">
            Bookings
          </Link>
        </button>

        <button className="btn btn-primary">
          <Link to="/meetingRooms/new" className="link-light">
            New Room
          </Link>
        </button>
      </div>
    </nav>
  );
}

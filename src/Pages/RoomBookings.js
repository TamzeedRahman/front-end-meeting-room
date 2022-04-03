import React from "react";
import Booking from "../Components/Booking";
import uuid from "react-uuid";

function RoomBookings({bookings}) {

  console.log(`bookings: ${bookings}`);
  return (
    <div className="">
      <section>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Meeting Name</th>
              <th scope="col">Start</th>
              <th scope="col">End</th>
              <th scope="col">Attendees</th>
            </tr>
          </thead>
          <tbody>
              {bookings && Object.values(bookings).map((booking) => {
                return (
                  <Booking key={uuid()} booking={booking} />
                );
              })}
          </tbody>
        </table>
      </section>
    </div>
  );
}
export default RoomBookings;
import React from "react";
import Booking from "./Booking";
import uuid from "react-uuid";

export default function Bookings({ bookings }) {
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
              {bookings && bookings.map((booking) => {
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

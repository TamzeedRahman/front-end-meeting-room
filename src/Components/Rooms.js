import React from "react";
import Room from "./Room";
import uuid from "react-uuid";

export default function Rooms({ meetingRooms }) {
  return (
    <div className="">
      <section>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Room Name</th>
              <th scope="col">Floor</th>
              <th scope="col">Capacity</th>
            </tr>
          </thead>
          <tbody>
            {
              meetingRooms.map((room) => {
                return (
                  <Room key={uuid()} meetingRoom={room} />
                );
              })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

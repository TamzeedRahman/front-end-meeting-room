import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams, useHistory, withRouter } from "react-router-dom";
import axios from "axios";
import { apiURL } from "../util/apiURL";

const API_BASE = apiURL();

function BookingDetails(props) {
  const { deleteBooking} = props;
  const [booking, setBooking] = useState([]);

  let { id } = useParams();
  let history = useHistory();

  useEffect(() => {
    axios
      .get(`${API_BASE}/bookings/${id}`)
      .then((response) => {
        setBooking(response.data.payload);
      })
      .catch((e) => {
        history.push("/not-found");
      });
  }, []);

  const handleDelete = () => {
    deleteBooking(id);
    history.push("/bookings");
  };

  return (
    <div>
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
          <tr>
            <th scope="row">{booking.meeting_name}</th>
            <td>{booking.time_start}</td>
            <td>{booking.time_end}</td>
            <td>{booking.attendees}</td>
          </tr>
        </tbody>
      </table>
      <hr />
      <div className="showNavigation">
        <div>
          {" "}
          <div className="row mt-3">
            <div className="col-sm">
              <Link to={`/bookings`}>
                <button className="btn btn-primary">Back</button>
              </Link>
            </div>
          </div>
        </div>
        <div>
          {" "}
          <div className="row mt-3">
            <div className="col-sm">
              <button onClick={handleDelete} className="btn btn-primary">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default withRouter(BookingDetails);

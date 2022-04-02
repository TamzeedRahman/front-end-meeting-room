import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams, useHistory, withRouter } from "react-router-dom";
import axios from "axios";
import { apiURL } from "../util/apiURL";

const API_BASE = apiURL();

function BookingDetails(props) {
  const { deleteBooking } = props;
  const [booking, setBooking] = useState([]);

  let { id } = useParams();
  let history = useHistory();

  useEffect(() => {
    axios
      .get(`${API_BASE}/bookings/${id}`)
      .then((response) => {
        const { data } = response;
        setBooking(data);
      })
      .catch((e) => {
        history.push("/not-found");
      });
  }, [id, history]);

  const handleDelete = () => {
    deleteBooking(id);
    history.push("/bookings");
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
          
            <th scope="col">Booking Name</th>
            <th scope="col">Floor</th>
            <th scope="col">Capacity</th>
            
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">{booking.name}</th>
            <td>{booking.floor}</td>
            <td>{booking.capacity}</td>
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

import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import axios from "axios";
import { apiURL } from "../util/apiURL";

const API_BASE = apiURL();

export default function BookingEditForm(props) {
  let { id } = useParams();
  let history = useHistory();

  const [booking, setBooking] = useState({
    name: "",
    floor: "",
    capacity: "",
  });

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


  const handleSubmit = (event) => {
    event.preventDefault();
    props.updateBooking(booking, id);
    history.push(`/bookings`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="row mt-3">
            <div className="col-sm">
              <input type="submit" className="btn btn-primary" />
            </div>
          </div>
        </div>
      </form>
      <div className="row mt-3">
        <Link to={`/bookings/${id}`}>
          <button className="btn btn-primary">Cancel</button>
        </Link>
      </div>
    </div>
  );
}
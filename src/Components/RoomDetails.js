import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams, useHistory, withRouter } from "react-router-dom";
import axios from "axios";

import { apiURL } from "../util/apiURL";

const API_BASE = apiURL();

function RoomDetails(props) {
  const { deleteMeetingRoom } = props;
  const [room, setRoom] = useState([]);

  let { id } = useParams();
  let history = useHistory();

  useEffect(() => {
    axios
      .get(`${API_BASE}/meetingRooms/${id}`)
      .then((response) => {
        setRoom(response.data.payload);
      })
      .catch((e) => {
        history.push("/not-found");
      });
  }, [id, history]);

  const handleDelete = () => {
    deleteMeetingRoom(id);
    history.push("/meetingRooms");
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
          
            <th scope="col">Room Name</th>
            <th scope="col">Floor</th>
            <th scope="col">Capacity</th>
            
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">{room.room_name}</th>
            <td>{room.building_level}</td>
            <td>{room.capacity}</td>
          </tr>
        </tbody>
      </table>

    


      <hr />
      <div className="showNavigation">
        <div>
          {" "}
          <div className="row mt-3">
            <div className="col-sm">
              <Link to={`/meetingRooms`}>
                <button className="btn btn-primary">Back</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="row mt-3">
            <div className="col-sm">
              <button onClick={handleDelete} className="btn btn-primary">
                Delete
              </button>
            </div>
          </div>
      </div>
    </div>
  );
}
export default withRouter(RoomDetails);

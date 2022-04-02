import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams, useHistory, withRouter } from "react-router-dom";
import axios from "axios";
import { apiURL } from "../util/apiURL";

const API_BASE = apiURL();

function RoomDetails(props) {
  const { deleteRoom } = props;
  const [room, setRoom] = useState([]);

  let { id } = useParams();
  let history = useHistory();

  useEffect(() => {
    axios
      .get(`${API_BASE}/meetingRooms/${id}`)
      .then((response) => {
        const { data } = response;
        setRoom(data);
      })
      .catch((e) => {
        history.push("/not-found");
      });
  }, [id, history]);


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
            <th scope="row">{room.name}</th>
            <td>{room.floor}</td>
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
      </div>
    </div>
  );
}
export default withRouter(RoomDetails);

import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
  
const EarthquackDataTableRow = (props) => {
  const { oid_fid,date, time, longitude, latitude, type,
    depth,
    depth_seismic_stations,
    magnitude,
    magnitude_type,
    magnitude_error,
    magnitude_seismic_stations,
    azimuthal_gap,
    horizontal_distance,
    horizontal_error,
    root_mean_square,
    source,
    location_source,
    magnitude_source,
    status } = props.obj;
  
  const deleteStudent = () => {
    axios
      .delete(
"http://localhost:8080/students/delete-student/" + oid_fid)
      .then((res) => {
        if (res.status === 200) {
          alert("Student successfully deleted");
          window.location.reload();
        } else Promise.reject();
      })
      .catch((err) => alert("Something went wrong"));
  };
  
  return (
    <tr>
      <td>{oid_fid}</td>
      <td>{magnitude}</td>
      <td>{latitude}</td>
      <td>{longitude}</td>
      <td>
        <Link className="edit-link" 
          to={"/edit-earthquackdata/" + oid_fid}>
          Edit
        </Link>
        <Button onClick={deleteStudent} 
          size="sm" variant="danger">
          Delete
        </Button>
      </td>
    </tr>
  );
};
  
export default EarthquackDataTableRow;
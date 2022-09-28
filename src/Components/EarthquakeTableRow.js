import React from "react";
import { Button } from "react-bootstrap";
import {   Route, Routes,Link ,useParams } from "react-router-dom";
import axios from "axios";
import Earthquake from 
    "./earthquake.component"
  
const EarthquakeDataTableRow = (props) => {

  const { ogc_fid, date, time, longitude, latitude, type,
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
"http://localhost:8080/students/delete-student/" + ogc_fid)
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
      <td>{date}</td>
      <td>{magnitude}</td>
      <td>{latitude}</td>
      <td>{longitude}</td>
      <td>{ogc_fid}</td>
      <td>
    
        <Routes>
      
        <Route path="/earthquake/:ogc_fid" component={<Earthquake />} />
        </Routes>
        <Link className="edit-link" 
          to={{pathname: "/EditEarthquakeData/"+ ogc_fid}}>
          Edit
        </Link>
        <Button onClick={deleteStudent} 
          size="sm" variant="danger">
          Delete
        </Button>
        {/* <Link className="edit-link" 
          to='/Earthquake/'>
          View
        </Link> */}
      </td>
    </tr>
  );
};
  
export default EarthquakeDataTableRow;
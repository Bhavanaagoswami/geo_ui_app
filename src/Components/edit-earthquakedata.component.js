import React, { useState, useEffect } from "react";
import axios from 'axios';
import EarthquakeForm from "./EarthquakeForm";
import {   Route, Routes,Link ,useParams } from "react-router-dom";
  
// Edit Component
const EditEarthquakeData = (props) => {
  let { ogc_fid } = useParams();
  console.log(props);
  const [formValues, setFormValues] = useState({
    type: "", date: "", time:"", magnitude: "", logitude:"", latitude:"",
    depth:"",
    depth_seismic_stations:"",
    magnitude_type:"",
    magnitude_error:"",
    magnitude_seismic_stations:"",
    azimuthal_gap:"",
    horizontal_distance:"",
    horizontal_error:"",
    root_mean_square:"",
    source:"",
    location_source:"",
    magnitude_source:"",
    status:""
  });
    
  //onSubmit handler
  const onSubmit = dataObject => {
    console.log("dataobject ",dataObject);
    axios
      .patch(
        'http://localhost:8080/updateEarthquake/1',
          dataObject
      )
      .then((res) => {
        if (res.status === 200) {
          alert("Earthquake Data successfully updated");
          props.history.push("/EarthquakeList");
        } else Promise.reject();
      })
      .catch((err) => alert("Something went wrong"));
  };
  
  // Load data from server and reinitialize Earthquake form
  useEffect(() => {
    axios
    .get(
        'http://localhost:8080/getEarthquakeData/1'
      )
      .then((res) => {
        const { date, logitude, latitude, 
                      depth,
            depth_seismic_stations,
            magnitude,
            magnitude_type,
            magnitude_seismic_stations,
            azimuthal_gap,
            horizontal_distance,
            root_mean_square,
            source,
            location_source,
            magnitude_source,
            status } = res.data;
        setFormValues({ date, logitude, latitude,
            depth,
            depth_seismic_stations,
            magnitude,
            magnitude_type,
            magnitude_seismic_stations,
            azimuthal_gap,
            horizontal_distance,
            root_mean_square,
            source,
            location_source,
            magnitude_source,
            status });
      })
      .catch((err) => console.log(err));
  }, []);
  
  // Return Earthquake form
  return (
    <EarthquakeForm
      initialValues={formValues}
      onSubmit={onSubmit}
      enableReinitialize
    >
      Update Earthquake
    </EarthquakeForm>
  );
};
  
// Export Earthquake Component
export default EditEarthquakeData;
import React, { useState, useEffect } from "react";
import axios from "axios";
import EarthQuackForm from "./EarthquackForm";
  
// Edit Component
const EditEarthquackData = (props) => {
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
  const onSubmit = (dataObject) => {
    axios
      .put(
        "http://localhost:8080/updateEarthquake/" +
          dataObject
      )
      .then((res) => {
        if (res.status === 200) {
          alert("Earthquack Data successfully updated");
          props.history.push("/EarthquackList");
        } else Promise.reject();
      })
      .catch((err) => alert("Something went wrong"));
  };
  
  // Load data from server and reinitialize Earthquack form
  useEffect(() => {
    axios
      .get(
        "http://localhost:8080/updateEarthquack/" 
        + props.match.params.id
      )
      .then((res) => {
        const { date, time, logitude, latitude, type,
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
            status } = res.data;
        setFormValues({ date, time, logitude, latitude, type,
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
            status });
      })
      .catch((err) => console.log(err));
  }, []);
  
  // Return Earthquack form
  return (
    <EarthQuackForm
      initialValues={formValues}
      onSubmit={onSubmit}
      enableReinitialize
    >
      Update Earthquack
    </EarthQuackForm>
  );
};
  
// Export Earthquack Component
export default EditEarthquackData;
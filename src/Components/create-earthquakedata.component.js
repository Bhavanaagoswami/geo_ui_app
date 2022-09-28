  
// Import Modules
import React, { useState } from "react";
import axios from 'axios';
import EarthquakeForm from "./EarthquakeForm";
  
// Add Earthquake Data Component
const CreateEarthquakeData = () => {
  const [formValues, setFormValues] = 
    useState({ type: '', date: '', time:'', magnitude: '', logitude:'', latitude:'',
    depth:'',
    depth_seismic_stations:'',
    magnitude_type:'',
    magnitude_error:'',
    magnitude_seismic_stations:'',
    azimuthal_gap:'',
    horizontal_distance:'',
    horizontal_error:'',
    root_mean_square:'',
    source:'',
    location_source:'',
    magnitude_source:'',
    status:''})
  // onSubmit handler
  const onSubmit = dataObject => {
    axios.post(
'http://localhost:8080/addEarthquake', 
dataObject)
.then(res => {
        if (res.status === 200)
          alert('Data successfully created')
        else
          Promise.reject()
      })
      .catch(err => alert('Something went wrong'))
  }
    
  // Return EarthquakeForm 
  return(
    <EarthquakeForm initialValues={formValues} 
      onSubmit={onSubmit} 
      enableReinitialize>
      Add Earthquake Data
    </EarthquakeForm>
  )
}
  
// Export AddEarthquakeData Component
export default CreateEarthquakeData
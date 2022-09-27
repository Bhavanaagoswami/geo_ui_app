  
// Import Modules
import React, { useState } from "react";
import axios from 'axios';
import EarthQuackForm from "./EarthquackForm";
  
// Add Earthquack Data Component
const CreateEarthquackData = () => {
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
    
  // Return EarthQuackForm 
  return(
    <EarthQuackForm initialValues={formValues} 
      onSubmit={onSubmit} 
      enableReinitialize>
      Add Earthquack Data
    </EarthQuackForm>
  )
}
  
// Export AddEarthquackData Component
export default CreateEarthquackData
import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, FormControl, Button } from "react-bootstrap";
  
const EarthquakeForm = (props) => {
  const validationSchema = Yup.object().shape({
    //type: Yup.string(),
    date:Yup.date().required("required"),
    longitude:Yup.number().required("required"),
    latitude:Yup.number().required("required"),
    depth:Yup.number().required("required"),
    depth_seismic_stations:Yup.string(),
    magnitude:Yup.number().required("required"),
    magnitude_type:Yup.string(),
    magnitude_seismic_stations:Yup.string(),
    azimuthal_gap:Yup.string(),
    horizontal_distance:Yup.string(),
    root_mean_square:Yup.string(),
    source:Yup.string(),
    location_source:Yup.string(),
    magnitude_source:Yup.string(),
    status:Yup.string()
  });
  console.log(props);
  return (
    <div className="form-wrapper">
      <Formik {...props} validationSchema={validationSchema}>
        <Form>
          <FormGroup>
           Date:<Field name="date" type="date" 
                className="form-control" />
            <ErrorMessage
              name="date"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>
           Magnitude:<Field name="magnitude" type="double" 
                className="form-control" />
            <ErrorMessage
              name="magnitude"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>
            Longitude:<Field name="longitude" type="double" 
                className="form-control" />
            <ErrorMessage
              name="longitude"
              className="d-block invalid-feedback"
              component="span"
            />
            </FormGroup>
            <FormGroup>
            Latitude:<Field name="latitude" type="double" 
                className="form-control" />
            <ErrorMessage
              name="latitude"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>
            Depth:<Field name="depth" type="double" 
                className="form-control" />
            <ErrorMessage
              name="latitude"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>
          Depth Seismic Stations:<Field name="depth_seismic_stations" type="string" 
                className="form-control" />
          </FormGroup>
          <FormGroup>
          Magnitude Type:<Field name="magnitude_type" type="string" 
                className="form-control" />
          </FormGroup>
          <FormGroup>
          Azimuthal Gap:<Field name="azimuthal_gap" type="string" 
                className="form-control" />
          </FormGroup>
          <FormGroup>
          Horizontal Distance:<Field name="horizontal_distance" type="string" 
                className="form-control" />
          </FormGroup>
          <FormGroup>
          Root Mean Square:<Field name="root_mean_square" type="string" 
                className="form-control" />
          </FormGroup>
          <FormGroup>
          Source:<Field name="source" type="string" 
                className="form-control" />
          </FormGroup>
          <FormGroup>
          Location Source:<Field name="location_source" type="string" 
                className="form-control" />
          </FormGroup>
          <FormGroup>
          Magnitude Source:<Field name="magnitude_source" type="string" 
                className="form-control" />
          </FormGroup>
          <FormGroup>
          Status:<Field name="status" type="string" 
                className="form-control" />
          </FormGroup>
          <Button variant="danger" size="lg" 
            block="block" type="submit">
            {props.children}
          </Button>
        </Form>
      </Formik>
    </div>
  );
};
  
export default EarthquakeForm;
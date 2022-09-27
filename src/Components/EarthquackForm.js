import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, FormControl, Button } from "react-bootstrap";
  
const EarthquackForm = (props) => {
  const validationSchema = Yup.object().shape({
    //type: Yup.string(),
    date:Yup.date().required("required"),
    //time:Yup.string(),
    longitude:Yup.number().required("required"),
    latitude:Yup.number().required("required"),
    depth:Yup.number().required("required"),
    depth_seismic_stations:Yup.string(),
    magnitude:Yup.number().required("required"),
    magnitude_type:Yup.string(),
    // magnitude_error:Yup.string(),
    magnitude_seismic_stations:Yup.string(),
    azimuthal_gap:Yup.string(),
    horizontal_distance:Yup.string(),
    // horizontal_error:Yup.string(),
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
           <h3>Date:</h3> <Field name="date" type="date" 
                className="form-control" />
            <ErrorMessage
              name="date"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>
           <h3>Magnitude</h3>:<Field name="magnitude" type="double" 
                className="form-control" />
            <ErrorMessage
              name="magnitude"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>
            <Field name="longitude" type="double" 
                className="form-control" />
            <ErrorMessage
              name="longitude"
              className="d-block invalid-feedback"
              component="span"
            />
            </FormGroup>
            <FormGroup>
            <Field name="latitude" type="double" 
                className="form-control" />
            <ErrorMessage
              name="latitude"
              className="d-block invalid-feedback"
              component="span"
            />
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
  
export default EarthquackForm;
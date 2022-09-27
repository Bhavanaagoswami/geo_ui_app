import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import EarthquackDataTableRow from "./EarthquackTableRow";
import MapComponent from "./maps/map.component";
  
const EarthquackDataList = () => {
  const [earthquacks, setEarthquacks] = useState([]);
  
  useEffect(() => {
    axios
      .get("http://localhost:8080/getEarthquackDataPerYear/1965")
      .then(({ data }) => {
        setEarthquacks(data.earthquackDataList);
        console.log(""+data.earthquackDataList);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  
  const DataTable = () => {
    return earthquacks.map((res, i) => {
      return <EarthquackDataTableRow obj={res} key={i} />;
    });
  };

  const rowStyle = (row, rowIndex) => {
    const style = {};
    style.fontSize = 10;
    return style;
  };
  
  return (
    <div className="table-wrapper">

    <MapComponent list={earthquacks}></MapComponent>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <td>ogc_fid</td>
            <td>magnitude</td>
            <td>latitude</td>
            <td>longitude</td>
          </tr>
        </thead>
        <tbody>{DataTable()}</tbody>
      </Table>
    </div>
  );
};
  
export default EarthquackDataList;
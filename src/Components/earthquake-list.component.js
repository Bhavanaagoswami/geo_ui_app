import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import EarthquakeDataTableRow from "./EarthquakeTableRow";
import MapComponent from "./maps/map.component";

  
const EarthquakeDataList = () => {
  const [Earthquakes, setEarthquakes] = useState([]);
  
  useEffect(() => {
    axios
      .get("http://localhost:8080/getEarthquakeDataPerYear/1965")
      .then(({ data }) => {
        setEarthquakes(data.earthquakeDataList);
        console.log(data.earthquakeDataList);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  
  const DataTable = () => {
    return Earthquakes.map((res, i) => {

      return <EarthquakeDataTableRow obj={res} key={i} />;
    });
  };

  const rowStyle = (row, rowIndex) => {
    const style = {};
    style.fontSize = 10;
    return style;
  };
  
  return (
    <div className="table-wrapper">

    <MapComponent list={Earthquakes}></MapComponent>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <td>date</td>
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
  
export default EarthquakeDataList;
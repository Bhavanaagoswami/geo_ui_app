import React from "react";
  
// Import Bootstrap
import { Nav, Navbar, Container, Row, Col } 
        from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
  
// Import Custom CSS
import "./App.css";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
  
// Import from react-router-dom
import { BrowserRouter as Router, 
    Route, Routes,Link } from "react-router-dom";
  
// Import other React Component
import CreateEarthquakeData from 
    "./Components/create-earthquakedata.component";
import EditEarthquakeData from 
    "./Components/edit-earthquakedata.component";
import EarthquakeDataList from 
    "./Components/earthquake-list.component";
    import Earthquake from 
    "./Components/earthquake.component";
  
// App Component
const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={"/CreateEarthquakeData"} 
                  className="nav-link">
                  Earthquake Details 
                </Link>
              </Navbar.Brand>
  
              <Nav className="justify-content-end">
                <Nav>
                  <Link to={"/CreateEarthquakeData"} 
                    className="nav-link">
                    Add Earthquake Data
                  </Link>
                </Nav>
  
                <Nav>
                  <Link to={"/EarthquakeDataList"} 
                    className="nav-link">
                    Earthquake Data List
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>
  
        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
            
            <Routes>
                  <Route path="/CreateEarthquakeData" 
                    element={<CreateEarthquakeData/>} />
                  <Route path="/EditEarthquakeData/:id" 
                    element={<EditEarthquakeData/>} />
                  <Route path="/EarthquakeDataList" 
                    element={<EarthquakeDataList/>} />
            </Routes>
            
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
};
  
export default App;
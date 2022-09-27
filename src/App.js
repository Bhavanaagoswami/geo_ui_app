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
import CreateEarthquackData from 
    "./Components/create-earthquackdata.component";
import EditEarthquackData from 
    "./Components/edit-earthquackdata.component";
import EarthquackDataList from 
    "./Components/earthquack-list.component";
  
// App Component
const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={"/CreateEarthquackData"} 
                  className="nav-link">
                  React MERN Stack App
                </Link>
              </Navbar.Brand>
  
              <Nav className="justify-content-end">
                <Nav>
                  <Link to={"/CreateEarthquackData"} 
                    className="nav-link">
                    Add Earthquack Data
                  </Link>
                </Nav>
  
                <Nav>
                  <Link to={"/EarthquackDataList"} 
                    className="nav-link">
                    Earthquack Data List
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
                  <Route path="/CreateEarthquackData" 
                    element={<CreateEarthquackData/>} />
                  <Route path="/EditEarthquackData/:id" 
                    element={<EditEarthquackData/>} />
                  <Route path="/EarthquackDataList" 
                    element={<EarthquackDataList/>} />
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
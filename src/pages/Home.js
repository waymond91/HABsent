import React, { useRef, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button, Row, Col, Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Districts from "./Districts";

export default function Home() {
  const [startDate, setStartDate] = useState(new Date());

  //var image = "../images/4color.png";

  return (
    <Row>
      <Col>
        <div style={{ backgroundColor: "white", height: "10vh" }}>
          <nav className="navbar-custom ">
            <Navbar variant="dark">
              <Container>
                <Navbar.Brand href="#home">HABsent</Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                  <Nav.Link href="/sign_in">Sign in</Nav.Link>
                  <Nav.Item>
                    <Button
                      href="/sign_up"
                      variant="light"
                      //onClick={handleSubmit}
                    >
                      Sign up
                    </Button>
                  </Nav.Item>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </nav>
        </div>
        <div className="body">
          <Districts />
        </div>
        <div className="slider">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>
        &nbsp;
      </Col>
    </Row>
  );
}
